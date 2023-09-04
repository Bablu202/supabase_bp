import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";

export default function Data({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [taskText, setTaskText] = useState(task.title);
  const [isComplete, setIsComplete] = useState(task.isDone);
  //delete task

  const deleteTask = async () => {
    await supabase.from("tasks").delete().eq("id", task.id);
  };
  //update task
  const updateTask = async (e) => {
    if (isComplete) return;
    e.preventDefault();
    setIsEdit((prev) => !prev);
    await supabase.from("tasks").update({ title: taskText }).eq("id", task.id);
  };

  const updateIsDone = async (e) => {
    //if (!isEdit) return;
    e.preventDefault();
    console.log(task.title, isComplete);
    setIsComplete((prev) => !prev);
    await supabase
      .from("tasks")
      .update({ isDone: isComplete })
      .eq("id", task.id);
    console.log(task.title, isComplete);
  };

  return (
    <div className="task">
      <div onDoubleClick={updateTask}>
        {!isEdit ? (
          <div style={{ textDecoration: isComplete && "line-through" }}>
            {task.title}
          </div>
        ) : (
          <input
            className="task_edit"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        )}
      </div>
      <div className="taskIcons">
        <a
          style={{ color: isComplete && "#6d15df" }}
          disabled={isEdit}
          onClick={updateIsDone}
        >
          <IoMdDoneAll />
        </a>

        <a
          style={{ color: isEdit && "#6d15df" }}
          onClick={updateTask}
          disabled={isComplete}
        >
          <AiFillEdit />
        </a>

        <a onClick={deleteTask}>
          <AiFillDelete />
        </a>
      </div>
    </div>
  );
}

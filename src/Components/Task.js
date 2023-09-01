import React, { useState } from "react";
import supabase from "../supabase/SupaBaseConfig";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
export default function Task({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [taskText, setTaskText] = useState(task.title);
  const [isComplete, setIsComplete] = useState(false);

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

  return (
    <div className="task">
      <div className="taskText" onDoubleClick={updateTask}>
        {!isEdit ? (
          <div style={{ textDecoration: isComplete && "line-through" }}>
            {task.title}
          </div>
        ) : (
          <input
            className="taskEditMode"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        )}
      </div>
      <div className="taskIcons">
        <button
          style={{ color: isComplete && "#6d15df" }}
          disabled={isEdit}
          onClick={() => setIsComplete((prev) => !prev)}
        >
          <IoMdDoneAll />
        </button>

        <button
          style={{ color: isEdit && "#6d15df" }}
          onClick={updateTask}
          disabled={isComplete}
        >
          <AiFillEdit />
        </button>

        <button onClick={deleteTask}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

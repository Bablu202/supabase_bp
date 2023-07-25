import { useEffect, useState } from "react";
import supabase from "../supabase/SupaBaseConfig";
import Task from "./Task";
// components

export default function AllTasks() {
  const [fetchError, setFetchError] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchtasks = async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        setFetchError("Could not fetch the tasks");
        setTasks(null);
      }
      if (data) {
        setTasks(data);
        setFetchError(null);
      }
    };

    fetchtasks();
  }, [tasks]);

  return (
    <div className="AllTasks">
      {fetchError && <p>{fetchError}</p>}
      {tasks && (
        <div className="tasks">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

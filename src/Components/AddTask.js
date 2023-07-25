import React, { useState } from "react";
import supabase from "../supabase/SupaBaseConfig";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [formError, setFormError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setFormError("enter some task over");
      return;
    }
    const { data, error } = await supabase.from("tasks").insert([{ title }]);
    if (error) {
      console.log(error);
      setFormError("plesae check the input Fields");
    }
    if (data) {
      setFormError(null);
      console.log(data);
      setTitle(data);
    }
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="AddTask">
        <input
          placeholder="complete the tasks"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

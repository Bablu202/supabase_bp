import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

export default function AddData() {
  const [title, setTitle] = useState("");
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setFormError("enter some task over");
      return;
    }
    try {
      setIsLoading(true);

      const { data } = await supabase.from("tasks").insert([{ title }]);
      setIsLoading(false);
      if (data) {
        setTitle(data);
        setFormError(null);
        console.log(data);
      }
    } catch (error) {
      if (error) {
        setTitle(null);
        setFormError("plesae check the input Fields");
        console.log(formError);
        console.log(error);
      }
    }
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="add_data">
          <input
            placeholder="Add tasks to remain you.."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn" type="submit" disabled={isLoading}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

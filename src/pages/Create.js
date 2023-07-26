import React from "react";
import AddTask from "../Components/AddTask";
import AllTasks from "../Components/AllTasks";
const Create = () => {
  return (
    <div className="page create">
      <AddTask />
      <AllTasks />
    </div>
  );
};

export default Create;

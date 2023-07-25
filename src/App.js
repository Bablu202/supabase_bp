import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import AddTask from "./Components/AddTask";
import AllTasks from "./Components/AllTasks";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Task Manager</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Task</Link>
      </nav>
      <AddTask />
      <AllTasks />
    </BrowserRouter>
  );
}

export default App;
/*
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
*/

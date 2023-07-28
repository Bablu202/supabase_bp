import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Task Manager</h1>
        <Link to="/">Login</Link>
        <Link to="/create">Create New Task</Link>
        <Link to="/Home">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
 <BrowserRouter>
      <nav>
        <h1>Task Manager</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Task</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
*/

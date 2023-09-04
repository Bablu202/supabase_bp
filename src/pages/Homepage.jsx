import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableData from "../Components/TableData";
import AddData from "../Components/AddData";
const Homepage = ({ token }) => {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <div className="navbar">
        <h2>Welcome back, {token.user.user_metadata.full_name}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="table">
        <AddData />
        <TableData token={token} />
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = ({ token }) => {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  console.log(token);
  return (
    <div>
      <img />
      <h3>Welcome back, {token.user.user_metadata.full_name}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Homepage;

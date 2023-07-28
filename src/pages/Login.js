import React, { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import supabase from "../supabase/SupaBaseConfig";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [oUser, setOUser] = useState(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const signInWithOAuth = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    console.log(user);
    if (user) {
      setOUser(user);
      localStorage.setItem("userData", user);
      console.log(55);
      navigate("/create");
    }

    if (error) {
      console.log(error);
    }

    console.log("userData");
  };
  async function signOut() {
    await supabase.auth.signOut();
    setOUser(null);
    console.log(88);
  }
  return (
    <div>
      <div className="App-header">
        {oUser ? (
          <button onClick={signOut}>LogOut</button>
        ) : (
          <button onClick={signInWithOAuth}>login</button>
        )}
      </div>
      <button></button>
    </div>
  );
}
//https://dev.to/dabit3/10-minute-tutorial-full-stack-github-authentication-with-supabase-react-3c6b

import React, { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import supabase from "../supabase/SupaBaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
    console.log(user);
    if (user) {
      navigate("/create");
    }

    if (error) {
      throw new Error(error.message);
    }

    console.log("User:", user);
    console.log("Session:", session);
  };

  return (
    <div>
      <div className="App-header">
        <Auth supabaseClient={supabase} providers={["google"]} />
      </div>
    </div>
  );
}
//https://dev.to/dabit3/10-minute-tutorial-full-stack-github-authentication-with-supabase-react-3c6b

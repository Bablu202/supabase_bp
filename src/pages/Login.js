import React, { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import supabase from "../supabase/SupaBaseConfig";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
export default function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      // Show the Google sign-in popup
      const { user, session, error } = await supabase.auth.signIn({
        provider: "google",
      });
      console.log(user);
      if (user) {
        navigate("/create");
      }

      if (error) {
        throw new Error(error.message);
        console.log(55);
      }

      console.log("User:", user);
      console.log("Session:", session);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <div className="App-header">
        <Auth supabaseClient={supabase} providers={["google"]} />
      </div>
    </div>
  );
}

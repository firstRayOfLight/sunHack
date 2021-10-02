import React from 'react';
import {useHistory} from "react-router-dom"
import "./Auth.css"
import { useAuth0 } from "@auth0/auth0-react"



function Auth() {

  const {loginWithRedirect} = useAuth0()
  const {  isAuthenticated, isLoading } = useAuth0()
  const history = useHistory()

  return (
    isLoading ?<div class="spinner"></div> : (
     !isAuthenticated ? (
      <div className="auth-overlay">
      <div className="auth-card">
        <h1 style={{opacity: "0.6",fontSize: "1.6rem"}}>Create a account 👩‍🏫</h1>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    </div>
     ): (
      history.push("/Home")
     )
    )
  );
}

export default Auth;
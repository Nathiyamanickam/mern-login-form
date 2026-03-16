import { useState } from "react";
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";

export default function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      
      <h2>MERN Authentication System with Login & Signup </h2>

      {!isLoggedIn ? (
        <>
          {page === "login" ? (
            <Login onLogin={() => setIsLoggedIn(true)} />
          ) : (
            <Signup onSignup={() => setIsLoggedIn(true)} />
          )}
          <button
            className="toggle-btn"
            onClick={() => setPage(page === "login" ? "signup" : "login")}
            style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}
          >
            {page === "login" ? "Switch to Signup" : "Switch to Login"}
          </button>
        </>
      ) : (
        <Home />
      )}
    </div>
  );
}
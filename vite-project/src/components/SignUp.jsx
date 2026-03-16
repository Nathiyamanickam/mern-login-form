import { useState } from "react";

export default function Signup({ onSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("https://mern-login-form-2.onrender.com/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      onSignup(); 
    }
  };

  return (
    <form onSubmit={handleSignup}>


      <h2>Signup</h2>


      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Signup</button>
    </form>
  );
}
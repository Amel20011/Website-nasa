"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setMsg("");

    const r = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    const j = await r.json();
    if (!r.ok) {
      setErr(j.error || "Registration failed.");
      return;
    }

    setMsg("Account created! You can login now.");
  }

  return (
    <main className="authShell">
      <form className="authCard" onSubmit={onSubmit}>
        <h1>Create Account</h1>

        <label className="label">Email</label>
        <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="label">Username</label>
        <input className="input" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label className="label">Password</label>
        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {err && <p className="error">{err}</p>}
        {msg && <p className="success">{msg}</p>}

        <button className="btnPink" type="submit">Register</button>

        <div className="authLinks">
          <Link href="/login">Back to login</Link>
          <Link href="/rules">Read Rules</Link>
        </div>
      </form>
    </main>
  );
}

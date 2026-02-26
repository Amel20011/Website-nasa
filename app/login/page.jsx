"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");

    const r = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });

    if (r?.error) setErr("Invalid login. Please try again.");
  }

  return (
    <main className="authShell">
      <form className="authCard" onSubmit={onSubmit}>
        <h1>Login</h1>
        <p className="muted">Astronomy vibes. BLACKPINK colors.</p>

        <label className="label">Email</label>
        <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="label">Password</label>
        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {err && <p className="error">{err}</p>}

        <button className="btnPink" type="submit">Sign In</button>

        <div className="authLinks">
          <Link href="/register">Create an account</Link>
          <Link href="/rules">Read Rules</Link>
        </div>
      </form>
    </main>
  );
}

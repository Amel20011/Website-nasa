"use client";

import Link from "next/link";

export default function RulesPage() {
  return (
    <main className="authShell">
      <div className="authCard">
        <h1>Community Rules</h1>
        <p className="muted">Please read before using BLACKPINK SPACE.</p>

        <ol className="rules">
          <li>No hate speech, harassment, or bullying.</li>
          <li>No illegal content or instructions to do harm.</li>
          <li>Do not share personal or sensitive information.</li>
          <li>Respect NASA/TikTok/OpenAI content attribution.</li>
          <li>AI answers may be inaccurate — verify important info.</li>
        </ol>

        <div className="authRow">
          <Link className="btnPink" href="/login">Back to Login</Link>
          <Link className="btnGhost" href="/">Go Home</Link>
        </div>
      </div>
    </main>
  );
}

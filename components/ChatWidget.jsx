"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful astronomy-themed assistant." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: next }),
    });
    const j = await r.json();

    setMessages([...next, { role: "assistant", content: j.reply || "No reply." }]);
    setLoading(false);
  }

  return (
    <section className="card">
      <h2 className="sectionTitle">AI Chat (OpenAI)</h2>

      <div className="chatBox">
        {messages.filter(m => m.role !== "system").map((m, i) => (
          <div key={i} className={`bubble ${m.role}`}>
            <div className="bubbleRole">{m.role.toUpperCase()}</div>
            <div>{m.content}</div>
          </div>
        ))}
        {loading && <div className="muted">Thinking…</div>}
      </div>

      <div className="chatRow">
        <input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message…"
          onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
        />
        <button className="btnPink" onClick={send}>Send</button>
      </div>
    </section>
  );
}

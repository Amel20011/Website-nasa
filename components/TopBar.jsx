"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function TopBar() {
  const { data } = useSession();
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US"));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const name = data?.user?.name || "User";
  const role = data?.user?.role || "FREE";

  return (
    <header className="topbar">
      <div className="topbarLeft">
        <div className="brand">BLACKPINK SPACE</div>
        <div className="chip">{time}</div>
      </div>

      <div className="topbarRight">
        <div className="chip">{name}</div>
        <div className="chip chipPink">{role}</div>
        <button className="btnGhost" onClick={() => signOut({ callbackUrl: "/login" })}>
          Logout
        </button>
      </div>
    </header>
  );
}

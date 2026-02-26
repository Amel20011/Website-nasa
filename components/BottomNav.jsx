"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const path = usePathname();
  const active = (p) => (path === p ? "navItem active" : "navItem");

  return (
    <nav className="bottomNav">
      <Link className={active("/")} href="/">Home</Link>
      <Link className={active("/chat")} href="/chat">AI Chat</Link>
      <Link className={active("/rules")} href="/rules">Rules</Link>
    </nav>
  );
}

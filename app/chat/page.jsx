"use client";

import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import ChatWidget from "@/components/ChatWidget";

export default function ChatPage() {
  return (
    <div className="shell">
      <TopBar />
      <main className="content">
        <ChatWidget />
      </main>
      <BottomNav />
    </div>
  );
}

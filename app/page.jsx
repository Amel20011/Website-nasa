"use client";

import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import NasaCard from "@/components/NasaCard";
import TikTokReels from "@/components/TikTokReels";

export default function HomePage() {
  return (
    <div className="shell">
      <TopBar />

      <main className="content">
        <NasaCard />
        <TikTokReels />
      </main>

      <BottomNav />
    </div>
  );
}

"use client";

import Script from "next/script";
import { TIKTOK_VIDEO_URLS } from "@/lib/tiktok";

export default function TikTokReels() {
  return (
    <section className="card">
      <h2 className="sectionTitle">Latest TikTok (Reels)</h2>

      <div className="reels">
        {TIKTOK_VIDEO_URLS.map((url) => (
          <div className="reel" key={url}>
            <blockquote className="tiktok-embed" cite={url} data-video-id="" style={{ maxWidth: 605, minWidth: 325 }}>
              <a href={url}>Watch on TikTok</a>
            </blockquote>
          </div>
        ))}
      </div>

      <Script async src="https://www.tiktok.com/embed.js" />
      <p className="muted">
        Tip: add more video URLs in <code>lib/tiktok.js</code>.
      </p>
    </section>
  );
}

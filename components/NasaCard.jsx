"use client";

import { useEffect, useState } from "react";

export default function NasaCard() {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    (async () => {
      const r = await fetch("/api/nasa/apod");
      const j = await r.json();
      setApod(j.data);
    })();
  }, []);

  if (!apod) return <section className="card">Loading NASA content...</section>;

  const isVideo = apod.media_type === "video";

  return (
    <section className="card">
      <h2 className="sectionTitle">NASA / Astronomy Update</h2>
      <p className="muted">{apod.date} — {apod.title}</p>

      {isVideo ? (
        <div className="mediaFrame">
          <iframe src={apod.url} title={apod.title} allow="autoplay; encrypted-media" />
        </div>
      ) : (
        <a href={apod.hdurl || apod.url} target="_blank" rel="noreferrer">
          <img className="heroImg" src={apod.url} alt={apod.title} />
        </a>
      )}

      <p className="desc">{apod.explanation}</p>
      <p className="muted">
        Source: NASA APOD
      </p>
    </section>
  );
}

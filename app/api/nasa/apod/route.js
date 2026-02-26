export const runtime = "nodejs";

export async function GET() {
  try {
    const key = process.env.NASA_API_KEY || "DEMO_KEY";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${encodeURIComponent(
      key
    )}`;

    const r = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hour
    if (!r.ok) throw new Error("NASA APOD fetch failed");

    const data = await r.json();
    return Response.json({ data });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "NASA service error" }, { status: 500 });
  }
}

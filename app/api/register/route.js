import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, username, password } = await req.json();

    const e = (email || "").toLowerCase().trim();
    const u = (username || "").trim();
    const p = password || "";

    if (!e || !u || p.length < 6) {
      return Response.json(
        { error: "Invalid input. Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findFirst({
      where: { OR: [{ email: e }, { username: u }] },
    });
    if (existing) {
      return Response.json(
        { error: "Email or username already exists." },
        { status: 409 }
      );
    }

    const hash = await bcrypt.hash(p, 10);
    await prisma.user.create({
      data: { email: e, username: u, password: hash, role: "FREE" },
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

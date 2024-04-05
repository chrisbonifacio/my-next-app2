import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const db = getRequestContext().env.AMPLIFY_DB;

  const body = (await request.json()) as any;

  const title = body.title;

  await db
    .prepare(
      `INSERT INTO todos (title)
      VALUES (?);`
    )
    .bind(title)
    .run();

  return Response.json({ message: "Todo created" });
}

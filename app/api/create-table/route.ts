import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const db = getRequestContext().env.AMPLIFY_DB;

  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      title TEXT NOT NULL, 
      done BOOLEAN DEFAULT FALSE
      );`
    )
    .run();

  return Response.json({ message: "Table created" });
}

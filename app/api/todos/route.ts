import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const db = getRequestContext().env.AMPLIFY_DB;

  const todos = (await db.prepare("SELECT * FROM todos").all()).results;

  return Response.json({ todos });
}

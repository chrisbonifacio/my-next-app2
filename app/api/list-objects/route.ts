import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const bucket = getRequestContext().env.MY_BUCKET;

  const objects = (await bucket.list()).objects;

  return Response.json({ objects });
}

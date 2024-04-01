import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log(request);

  return Response.json({
    ok: true,
  });
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  console.log("로그인 로직 구현은 여기서 하면 된다.");

  return Response.json(data);
}

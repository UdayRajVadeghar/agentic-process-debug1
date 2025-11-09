import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { message } = await request.json();
  console.log(message);

  const AGENT_PROCESS_START_URL = `${process.env.AGENTIC_PROCESS_START_URL}`;

  const response = await fetch(AGENT_PROCESS_START_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
    body: JSON.stringify({ input: message }),
  });
  const responseData = await response.json();
  return NextResponse.json({ message: responseData });
}

export async function GET(request: NextRequest) {
  const jobId = request.nextUrl.searchParams.get("jobId");

  const response = await fetch(`${process.env.POLLING_URL}/(${jobId})`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  });
  const responseData = await response.json();
  console.log(responseData);
  return NextResponse.json({ message: responseData });
}

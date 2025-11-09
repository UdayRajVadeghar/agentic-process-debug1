import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { message, bearerToken, apiUrl } = await request.json();
  console.log(message);

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
    body: JSON.stringify({ input: message }),
  });
  const responseData = await response.json();
  return NextResponse.json({ message: responseData });
}

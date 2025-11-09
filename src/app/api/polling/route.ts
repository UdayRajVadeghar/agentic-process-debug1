import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { jobId, bearerToken } = await request.json();

  //   console.log(jobId);

  const url = `${process.env.POLLING_URL}` + "" + `(${jobId})`;
  //   console.log(url);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  });

  const responseData = await response.json();

  //   console.log(responseData.State);
  return NextResponse.json({ result: responseData });
}

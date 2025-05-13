import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({
      status: 400,
      message: "Bad Request: File is required",
      error: "No file uploaded",
    });
  }
}

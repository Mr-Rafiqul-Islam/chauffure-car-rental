import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, token, password } = await req.json();
    
    // FIX: Changed URL from /password/forgot to /password/reset
    const res = await fetch(
      `${process.env.NEXT_SERVER_API_URL}/password/reset`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, token, password }),
      }
    );

    // IMPROVEMENT: Forward the actual error (e.g. "Invalid Token")
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(
        { message: errorData.message || "Failed to reset password" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
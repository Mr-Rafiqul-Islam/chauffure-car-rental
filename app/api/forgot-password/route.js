import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    
    const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/password/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(
        { message: errorData.message || "Failed to send forgot password request" },
        { status: res.status } 
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error("Error sending forgot password request:", error);
    return NextResponse.json(
      { message: "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
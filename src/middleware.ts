import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin:boolean = true;
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};

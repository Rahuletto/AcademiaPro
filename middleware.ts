import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/academia", "/calendar", "/links", "/courses"];
const home = ["/"];

const isAuthenticated = (request: NextRequest): boolean => {
  const token = request.cookies.get("key");
  return !!token;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isAuthenticated(request) && home.includes(pathname)) {
    return NextResponse.redirect(new URL("/academia", request.url));
  } else if (!isAuthenticated(request) && home.includes(pathname))
    return NextResponse.redirect(new URL("/home", request.url));
  if (protectedRoutes.includes(pathname) && !isAuthenticated(request)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

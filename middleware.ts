import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = createRouteMatcher([
  "/dashboard",
  "/dashboard/(.*)"
]);

const allowedOrigins = [
  "https://chat-vibe-ashy.vercel.app",
  "https://chating-with-socket-oi.onrender.com",
  "*"
];

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // CORS handling
  const origin = req.headers.get("origin");
  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  }

  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Methods", "GET, DELETE, PATCH, POST, PUT, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle OPTIONS preflight request
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { headers: res.headers });
  }

  return res;
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

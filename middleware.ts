import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = createRouteMatcher([
  "/dashboard",
  "/dashboard/(.*)"
]);

const allowedOrigins = [
  "https://chat-vibe-ashy.vercel.app",
  "https://chating-with-socket-oi.onrender.com",
  "http://localhost:3000",
  "*"
];

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});

export function middleware(req: NextRequest) {
  const origin = req.headers.get("origin");
  
  // Handle OPTIONS request early and set CORS headers
  if (req.method === "OPTIONS") {
    const res = new NextResponse(null);
    
    // Only allow specified origins in the OPTIONS request
    if (origin && allowedOrigins.includes(origin)) {
      res.headers.set("Access-Control-Allow-Origin", origin);
    } else {
      res.headers.set("Access-Control-Allow-Origin", "*"); // Fallback
    }
    
    res.headers.set("Access-Control-Allow-Credentials", "true");
    res.headers.set("Access-Control-Allow-Methods", "GET, DELETE, PATCH, POST, PUT, OPTIONS");
    res.headers.set(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    return res; // Early return for OPTIONS request
  }

  // Handle non-OPTIONS requests and set headers accordingly
  const res = NextResponse.next();

  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  } else {
    res.headers.set("Access-Control-Allow-Origin", "*");
  }

  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

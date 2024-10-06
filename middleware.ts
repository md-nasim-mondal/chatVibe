// import { NextRequest, NextResponse } from "next/server";

// // Middleware function
// export function middleware(req: NextRequest) {
//   // You can perform operations such as authentication checks here
//   const { pathname } = req.nextUrl;

//   // Example: If the user is not authenticated, redirect to the login page
//   if (pathname.startsWith("/main")) {
//     // Add logic for checking user authentication
//     const isAuthenticated = false; // Replace with your actual auth logic

//     if (!isAuthenticated) {
//       return NextResponse.redirect(new URL("/sign-in", req.url));
//     }
//   }

//   // Continue to the next middleware or the requested page
//   return NextResponse.next();
// }

// // Optional: Configure the middleware to run on specific paths
// export const config = {
//   matcher: [
//     "/main",
//   ], // Apply middleware to /protected routes
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  "/main",
  "/main/upcoming",
  "/main/previous",
  "/main/recordings",
  "/main/personal-room",
  "/main/meeting(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

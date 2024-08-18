// src/middleware.ts
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(req: Request) {
    const session = await auth();

    // If the user is not authenticated, redirect to the login page
    if (!session?.user) {
        const url = new URL(req.url);
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    // If authenticated, proceed as usual
    return NextResponse.next();
}

// Specify which paths you want to protect
export const config = {
    matcher: ["/dashboard/:path*"], // Replace with the route(s) you want to protect
};


// src/middleware.ts


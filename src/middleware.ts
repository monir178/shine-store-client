import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
    const sessionToken = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const accessToken = req.cookies.get('accessToken')?.value;

    if (sessionToken || accessToken) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', req.url));
}

export const config = { matcher: ["/dashboard/:path*"] };

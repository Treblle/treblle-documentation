import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const accept = request.headers.get("accept");

    if (accept?.includes("text/markdown")) {
        const url = new URL(request.url);
        return NextResponse.rewrite(new URL(`/api${url.pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

//  export { default } from 'next-auth/middleware';

import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req, res, next) {
 
    console.log(req.nextUrl.pathname);
      if (
        req.nextUrl.pathname.startsWith('/settings') &&
        req.nextauth.token?.role !== 'Admin'
      ) {
        return NextResponse.rewrite(new URL('/notAuthorized', req.url));
      }
  },
  { 
    callbacks: {
      authorized: ({ token }) => token?.role === 'Admin'||token?.role === 'Manager',
    },
  }
)
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', '/settings'],
 
};

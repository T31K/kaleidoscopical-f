import { NextResponse } from 'next/server';

// One project, many subdomains. Each <sub>.kaleidoscopical.com is rewritten to
// an /<sub> path group, so pookie.kaleidoscopical.com/privacy actually renders
// app/pookie/privacy. The apex + www stay on the main site.
// New product? Just add an app/<sub>/ folder — no config change needed.
export function middleware(request) {
  const url = request.nextUrl;
  const host = (request.headers.get('host') || '').split(':')[0];

  let sub = null;
  if (host.endsWith('.kaleidoscopical.com')) {
    const label = host.slice(0, -'.kaleidoscopical.com'.length);
    if (label && label !== 'www') sub = label;
  } else if (host.endsWith('.localhost')) {
    // local dev: pookie.localhost:3000
    sub = host.slice(0, -'.localhost'.length) || null;
  }

  if (sub && !url.pathname.startsWith(`/${sub}`)) {
    return NextResponse.rewrite(new URL(`/${sub}${url.pathname === '/' ? '' : url.pathname}`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  // run on page routes only; skip _next internals, api, and any file (has a dot)
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};

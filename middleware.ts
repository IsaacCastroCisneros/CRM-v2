export { default } from "next-auth/middleware"
import { redirect } from 'next/navigation';

export const config = { matcher: ["/dashboard/:path*"] }


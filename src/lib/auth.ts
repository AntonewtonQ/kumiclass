import { SupabaseAdapter } from "@auth/supabase-adapter"
import NextAuth from "next-auth"
import jwt from "jsonwebtoken"
import Google from "next-auth/providers/google"
import {Adapter} from "next-auth/adapters"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter:SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  providers: [
    Google({
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
  })
],
callbacks: {
  async session({ session, user }) {
    const signingSecret = process.env.SUPABASE_JWT_SECRET
    if (signingSecret) {
      const payload = {
        aud: "authenticated",
        exp: Math.floor(new Date(session.expires).getTime() / 1000),
        sub: user.id,
        email: user.email,
        role: "authenticated",
      }
      session.supabaseAccessToken = jwt.sign(payload, signingSecret)
    }
    return session
  },
},
  pages: {
    signIn: "/login",
  },
})

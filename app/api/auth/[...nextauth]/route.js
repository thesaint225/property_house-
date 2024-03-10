import { authOptions } from "@/Utils/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as Get, handler as POST };

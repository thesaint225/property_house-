import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on sucessful signin
    async signIn({ profile }) {
      // 1.connect to the database
      // 2.Check if user exists
      // 3.If not ,then add user to database
      // 4.return true to allow sign in
    },
    // modifies the session object
    async session({ session }) {
      // Get the user from database
      // Assign the user id to the session
      // return session
    },
  },
};

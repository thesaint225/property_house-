import connectedDB from "@/config/database";
import User from "@/models/User";
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
      await connectedDB();
      // 2.Check if user exists
      const userExists = await User.findOne({ email: profile.email });
      // 3.If not ,then add user to database
      if (!userExists) {
        // truncate user name if too long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      // 4.return true to allow sign in
      return true;
    },
    // modifies the session object
    async session({ session }) {
      // Get the user from database
      const user = await User.findOne({ email: session.user.email });
      // Assign the user id to the session
      session.user.id = user._id.toString();
      // return session
      return session;
    },
  },
};

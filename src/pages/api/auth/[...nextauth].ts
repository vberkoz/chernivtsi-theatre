import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (credentials?.username === "admin" && credentials.password === "admin") {
          return { id: "1", name: "Admin" };
        }
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);

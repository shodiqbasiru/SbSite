import { login } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface LoginCredentials {
  username: string;
  password: string;
}

const credentialsProvider = CredentialsProvider({
  type: "credentials",
  name: "Credentials",
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  authorize: async (credentials) => {
    const { username, password } = credentials as LoginCredentials;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user: any = await login({ username });
    // console.log("user route next auth", user);

    // if (user === 0) {
    //   return null;
    // }

    // const storedUser = user;
    // console.log("isValid", storedUser.password === password);
    // console.log("storedUser", storedUser.password);
    // console.log("inputUser", password);
    // if (storedUser.password === password) {
    //   return storedUser;
    // } else {
    //   return null;
    // }

    if (user) {
      const passConfirmed = await compare(password, user.password);
      if (passConfirmed) {
        return user;
      } else {
        return null;
      }
    } else {
      return null;
    }
  },
});

const authOptions: NextAuthOptions = {
  providers: [credentialsProvider],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jwt: async ({ token, account }: any) => {
      if (account?.provider === "credentials") {
        token.username = account.username;
        token.fullname = account.fullName;
        token.role = account.role;
      }
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    session: async ({ session, token }: any) => {
      if ("username" in token) {
        session.user.username = token.username;
      }

      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }

      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

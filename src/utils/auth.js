import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/utils/connect";
import {getServerSession} from "next-auth";
export const authOptions = {
    adapter: PrismaAdapter(prisma),
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
}

export const getAuthSession = () => getServerSession(authOptions)
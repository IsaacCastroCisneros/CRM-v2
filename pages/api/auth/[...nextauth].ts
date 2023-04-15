import axios from "axios";
import NextAuth,{NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = 
{
  
  providers: [
    CredentialsProvider(
      {
        type:'credentials',
        credentials:{
          user: { label: "user"},
        },
        async authorize(credentials,req)
        { 
          const{user}=credentials as any

          const myUser = JSON.parse(user)

          if(myUser.tipo==='ADMI')
          {
            return myUser
          }
  
          return null;
        }
      }
    )
  ],
  session:
  {
    strategy:'jwt'
  },
  pages:
  {
    signIn:'/login'
  },
  callbacks: {
    async session({ session, token }:{session:any,token:any}) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret:process.env.NEXTAUTH_SECRET
}
export default NextAuth(authOptions)
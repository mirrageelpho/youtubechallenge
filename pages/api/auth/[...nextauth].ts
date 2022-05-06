import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth ({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID || '',
        clientSecret: process.env.GOOGLE_SECRET || '',
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
      })
    ],
    secret: "p7yicITMPWLWXv2tYuezIRHa3iyb4/yu3sfELbSRXdM=",
     callbacks: {
      session: async (session: any) => {
        const { session: token } = session
        session.id = token.jti;
        return Promise.resolve(session);
      },
    }

});
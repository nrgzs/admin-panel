import axios from 'axios';
import NextAuth from 'next-auth/next';

import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'your-admin-email',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your-password',
        },
      },
      async authorize(credentials) {
        const res = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();
        console.log('🚀 ~ file: [...nextauth].ts:44 ~ authorize ~ user:', user);

        if (user.email) {
          console.log(
            '🚀 ~ file: [...nextauth].ts:46 ~ authorize ~ user:',
            user
          );

          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
     console.log('callback'+ user);
      return { ...token, ...user };
    },

    async session({ session, token,user }) {
      session.user = token;
      return session;
    },
  },
  // pages:{
  //   signIn:'/signin'
  // }
};

export default NextAuth(options);

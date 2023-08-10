import axios from 'axios';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'your-cool-username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your-awesome-password',
        },
      },
      async authorize(credentials) {
        

        const res = await axios.post(
          'http://localhost:3000/api/auth/login',
          {
            credentials,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const user = res.data.result;
        console.log('🚀 ~ file: [...nextauth].ts:42 ~ authorize ~ data:', user);

        if (res.status == 200 && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(options);

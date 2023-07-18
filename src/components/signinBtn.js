'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function SignComponent() {
  const { data: session } = useSession();
  console.log('🚀 ~ file: loginvtn.js:4 ~ Component ~ session:', session);

  if (session && session.user) {
    return (
      <>
        <div>
          <h2> Welcome , {session.user.email}</h2>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

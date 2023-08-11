import React from 'react';

import { useSession, signIn, signOut } from 'next-auth/react';

const SignComponent: React.FC = () => {
const { data: session } = useSession();
if (session) {
        console.log("🚀 ~ file: signinBtn.tsx:8 ~ session:", session)
        console.log(
          '🚀 ~ file: signinBtn.tsx:12 ~ session.user:',
          session.user
        );

  return (
    <>
      Signed in as {session.user?.email} <br />
      Signed in as {session.user?.name} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
return (
  <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
  </>
);
};

export default SignComponent;

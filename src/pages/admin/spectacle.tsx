import { signIn, signOut, useSession } from "next-auth/react";

type Props = {
  data: string;
}

export default function Spectacle({ data }: Props) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Spectacles
        <br />
        {data}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const data = "This is data"

  // Pass data to the page via props
  return { props: { data } }
}
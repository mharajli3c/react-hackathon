import Head from "next/head";
import React from "react";
import ChallengeOne from "../components/ChallengeOne";

export default function Index() {
  return (
    <>
      <Head>
        <title>React Hackathon</title>
      </Head>

      <ChallengeOne />
    </>
  );
}

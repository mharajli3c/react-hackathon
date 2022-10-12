import Head from "next/head";
import React from "react";
import ChallengeOne from "../components/ChallengeOne";
import ChallengeTwo from "../components/ChallengeTwo";
import ChallengeThree from "../components/ChallengeThree";
import ChallengeFour from "../components/ChallengeFour";
import ChallengeFive from "../components/ChallengeFive";
import ChallengeSix from "../components/ChallengeSix";

export default function Index() {
  return (
    <>
      <Head>
        <title>React Hackathon</title>
      </Head>

      {/* Comment out each challange as necessary */}
      <ChallengeOne />
      {/* <ChallengeTwo /> */}
      {/* <ChallengeThree /> */}
      {/* <ChallengeFour /> */}
      {/* <ChallengeFive /> */}
      {/* <ChallengeSix /> */}
    </>
  );
}

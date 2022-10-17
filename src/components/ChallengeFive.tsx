import React, { useState, createContext, useEffect, useContext } from "react";
import login from "../pages/api/auth/login";

// Create your context here
const ChallengeContext = React.createContext({});


const ChallengeFive = () => {
  // Fetch your "auth session" from /api/auth/login and store it in here
  const [auth, setAuth] = useState(null);

  const useFetchAuthSession = () => {
    async function fetchAuthSession() {
      let response = await fetch("/api/auth/login");
      setAuth(await response.json());
    }
    fetchAuthSession();
  }

  useEffect(() => {
    useFetchAuthSession();
  }, []);

  console.log(auth);    
  return (
    <div>
      {/* Wrap your component with the context provider here */}
      <ChallengeContext.Provider value={{auth}}>
        <ChildComponent />
      </ChallengeContext.Provider>
    </div>
  );
};

// Create a child component here that takes NO props.
// Utilize useContext to read the auth state within your component
const ChildComponent = () => {
  const contextUser = useContext(ChallengeContext);
  return (
    <div>
      <p>User ID: {contextUser.auth?.id}</p>
      <p>Full Name: {contextUser.auth?.fullName}</p>
    </div>
  )
}

export default ChallengeFive;

import { useState, createContext } from "react";

// Create your context here

const ChallengeFive = () => {
  // Fetch your "auth session" from /api/auth/login and store it in here
  const [auth, setAuth] = useState(null);

  return (
    <div>
      {/* Wrap your component with the context provider here */}
      <ChildComponent />
    </div>
  );
};

// Create a child component here that takes NO props.
// Utilize useContext to read the auth state within your component
const ChildComponent = () => {
  return (
    <div>
      <p>User ID: ???</p>
      <p>Full Name: ???</p>
    </div>
  )
}

export default ChallengeFive;

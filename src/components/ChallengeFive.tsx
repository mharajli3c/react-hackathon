import { useState, createContext, useContext, useEffect } from "react";

// Create your context here
const AuthContext = createContext(null);

const ChallengeFive = () => {
  // Fetch your "auth session" from /api/auth/login and store it in here
  const [auth, setAuth] = useState(null);
  
  useEffect(() => {
    fetch('/api/auth/login')
    .then(res => res.json())
    .then(result => setAuth(result))
  }, [])
  

  return (
    <div className="flex flex-col items-center m-2">
      {/* Wrap your component with the context provider here */}
      <h1 className="text-blue-700 font-semibold">Challenge 5</h1>
      <AuthContext.Provider value={auth}>
        <ChildComponent />
      </AuthContext.Provider>
    </div>
  );
};

// Create a child component here that takes NO props.
// Utilize useContext to read the auth state within your component
const ChildComponent = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <p>User ID: {user ? user.id: ''}</p>
      <p>Full Name: {user ? user.fullName : ''}</p>
    </div>
  )
}

export default ChallengeFive;

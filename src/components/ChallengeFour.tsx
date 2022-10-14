import React, { useEffect, useState } from "react";
import UserList from "./UserList";

// COPY YOUR CODE FROM CHALLENGE 2
const ChallengeFour = () => {
  const [users, setUsers] = useState([]);

  // 1. On component mount, fetch a list of users with a GET request to /api/users
useEffect(() => {
  fetch('/api/users')
  .then(res => res.json())
  .then(result => {
    setUsers(result)
  })
}, [])
  return (
  <div className="flex flex-col items-center m-4">
    <h1 className="text-blue-700 font-semibold">Challenge 4</h1>
    <h1 className="font-bold text-lg">Users</h1>
    <UserList userslist={users} />
  </div>
  );
};

export default ChallengeFour;

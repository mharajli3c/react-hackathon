import React, { useState } from "react";

const ChallengeTwo = () => {
  const [users, setUsers] = useState([]);

  // 1. On component mount, fetch a list of users with a GET request to /api/users

  return (
    <div>
      <h1>Users</h1>
      {/* 2. Display a list of users here */}
    </div>
  );
};

export default ChallengeTwo;

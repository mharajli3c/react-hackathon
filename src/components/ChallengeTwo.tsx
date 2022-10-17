import React, { useState, useEffect } from "react";

const ChallengeTwo = () => {
  const [users, setUsers] = useState([]);

  const useFetchUsers = () => {
    async function fetchUsers() {
      let response = await fetch('api/users');
      setUsers( await response.json());      
    }
    fetchUsers();
  }

  // 1. On component mount, fetch a list of users with a GET request to /api/users
  useEffect( () => {
    useFetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {/* 2. Display a list of users here */}
      <ol>
        {users.map( (user) => <li>{user.fullName} </li>)}
      </ol>
    </div>
  );
};

export default ChallengeTwo;

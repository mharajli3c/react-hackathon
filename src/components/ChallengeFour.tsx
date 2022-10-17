import React, { useState, useEffect } from "react";
import UserList from "../pages/api/users/UserList";

// COPY YOUR CODE FROM CHALLENGE 2
const ChallengeFour = () => {
  
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
      <UserList users={users}/>
    </div>
  );
};

export default ChallengeFour;

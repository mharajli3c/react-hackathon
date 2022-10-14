import React from 'react'
import useFetch from './useFetch'

const ChallengeTwoPointFive = () => {
    const users = useFetch('/api/users')
  return (
    <div className="flex flex-col items-center m-2">
        <h1 className="text-blue-700 font-semibold">Challenge 2.5</h1>
        <h1 className="font-bold text-lg">Users</h1>
      {users.map((u, id) =>  <h2 key={id}>{u.fullName}</h2> )}
    </div>
    
  )
}

export default ChallengeTwoPointFive
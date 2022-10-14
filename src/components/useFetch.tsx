import { useEffect, useState } from 'react'

export default (string: String) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`${string}`)
        .then(res => res.json())
        .then(result => {
          setUsers(result)
        })
      }, [])
  return users
}


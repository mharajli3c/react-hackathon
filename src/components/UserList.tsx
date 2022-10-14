import React, { FC } from 'react'
import {User} from '../pages/api/users'
import UserItem from './UserItem'

interface Users {
    userslist: User[]
}

const UserList: FC<Users>  = ({userslist}): JSX.Element  => {
  return (
    <div>
        
        
    {userslist.map((u, id) =>  (
        <UserItem key={id} firstName={u.firstName} lastName={u.lastName}/>
    ) )}
    </div>
    
  )
}

export default UserList
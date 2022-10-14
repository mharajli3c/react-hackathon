import React, { FC } from 'react'
import {User} from '../pages/api/users'

interface UserProps {
    firstName: string,
    lastName: string
  }

const UserItem: FC<UserProps> = ({firstName, lastName}): JSX.Element => {
    return(
    <div >
        <h2 className='mx-2'>{firstName}</h2>
        <h2>{lastName}</h2>
    </div>
    )
  };

export default UserItem
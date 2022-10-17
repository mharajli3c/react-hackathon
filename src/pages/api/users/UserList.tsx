import React from "react";
import UserItem from "./UserItem";

const UserList = ({users}) => {
    return (
        <div>
            <h1>Users</h1>
            {users.map( (user) => <UserItem firstName={user.firstName} lastName={user.lastName}/>)}
        </div>
    );
}

export default UserList;
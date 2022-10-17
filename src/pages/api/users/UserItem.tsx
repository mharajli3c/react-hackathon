import react from "react"
import { ReactPropTypes } from "react";

const UserItem = ({firstName, lastName}) => {
    return (
        <li>{firstName} {lastName}</li>
    );
}

export default UserItem;
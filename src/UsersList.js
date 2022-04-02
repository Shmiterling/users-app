import React from 'react';
import './UsersList.css'

function UsersList(props) {


    let usersList = props.usersList;
    let usersLiElement = usersList.map(user => 
        <li key={user.id}>{user.name}<span onClick={() => props.removeUserMethod(user.id)}>X</span></li>
    );


    return (
        <ul className='the-list'>
            {usersLiElement}
        </ul>
    );

}

export default UsersList;
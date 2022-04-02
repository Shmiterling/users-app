import React, { Component } from 'react';
import './Users.css';
import UsersList from './UsersList';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  addUser = (event) => {

    event.preventDefault();

    let newUser = {
      name: this._inputField.value,
      id: Date.now()
    }

    this.setState(state => {

      return ({
        users: state.users.concat(newUser)
      });

    })


    this._inputField.value = '';

  }


  removeUser = (userID) => {


    this.setState((state) => {
      return({
        users: state.users.filter(user => (user.id !== userID))
      })
    })

  }




  render() {

    return (
      <div className='users-main'>
        <h1>User's List</h1>

        <form onSubmit={this.addUser}>
          <input ref={(element) => { this._inputField = element }} type='text' placeholder='Enter name'></input>
          <button type='submit'>Add user</button>
        </form>

        <UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />


      </div>
    );

  }

}

export default Users;

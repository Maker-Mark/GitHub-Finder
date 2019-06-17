import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'


const Users = ({users, loading})=> {
  //Now we will be getting props from the user componet being rendered in the contianer.
  //So now we user this.props.users instead of this.state

    if(loading){
      return <Spinner/>
    }else{

    
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

//Let's make sure we get an array
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Users;

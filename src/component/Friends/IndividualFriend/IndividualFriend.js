import React from 'react';

const IndividualFriend = (props) => {
    const { name, username } = props.friend;
    return (
        <div>
            <h2>Name: {name}</h2>
            <button>{username}</button>
        </div>
    );
};

export default IndividualFriend;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import IndividualFriend from './IndividualFriend/IndividualFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h1>Hello friends  </h1>
            <p>Our Friend Number is: {friends.length}</p>
            {
                friends.map(friend => <IndividualFriend key={friend.id} friend={friend}></IndividualFriend>)
            }
        </div>
    );
};

export default Friends;
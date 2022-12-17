import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { FriendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${FriendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }
        , [])
    const { name, email, phone } = friend
    return (
        <div>
            <p>This in the friend details </p>
            <p>your friend id is : {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetail;
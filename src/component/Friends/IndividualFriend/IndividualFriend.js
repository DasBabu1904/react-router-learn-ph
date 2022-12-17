import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const IndividualFriend = (props) => {
    const { name, username, id } = props.friend;

    const navigate = useNavigate();
    function showDetail() {
        navigate('/friend/' + id);
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/' + id}>Details</Link>
            <button onClick={showDetail}>{username}</button>
        </div>
    );
};

export default IndividualFriend;
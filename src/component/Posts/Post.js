import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>

            <h1>You had: {posts.length}</h1>
            {
                posts.map(post =>
                    <Link
                        key={post.id}
                        to={`/posts/${post.id}`}
                    >
                        {post.id}    </Link>
                )
            }
            <Outlet></Outlet>
        </div >
    );
};

export default Post;
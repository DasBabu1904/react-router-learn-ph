import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;
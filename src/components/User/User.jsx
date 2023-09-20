import React from 'react';
import './User.css'
import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
    const { name, username, email, id } = user;
    
    const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/user/${id}`)
    }
    return (
        <div className='user'>
            <h2>Name: {name}</h2>
            <p>{username}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>See Details</Link>
            <br />
            <button onClick={handleDetails}>See details click btn</button>
        </div>
    );
};

export default User;
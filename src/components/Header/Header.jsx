import {  NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/mealdb">MealDb</NavLink>
        </nav>
    );
};

export default Header;
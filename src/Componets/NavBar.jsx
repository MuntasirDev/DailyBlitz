import React from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider.jsx";
import { GiButtonFinger } from "react-icons/gi";


const NavBar = () => {

 const {user, logout} = useContext(AuthContext);

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logout clicked");
    logout().then (()=>{ alert("Logout successful"); }).catch (error => {
      // console.log (error);
    });

  }


  return (
<div className="flex flex-col sm:flex-row justify-between items-center w-full p-4 gap-4 sm:gap-0">
  {/* User info */}
  <div className="text-xs sm:text-sm bg-secondary text-white px-2 py-1 rounded-lg truncate max-w-[150px] sm:max-w-[250px]">
    {"User: " + (user ? user.email : "")}
  </div>

  {/* Nav links */}
  <div className="nav flex flex-wrap gap-4 sm:gap-7 text-accent justify-center">
    <NavLink to="/" className="hover:text-secondary">Home</NavLink>
    <NavLink to="/about" className="hover:text-secondary">About</NavLink>
    <NavLink to="/career" className="hover:text-secondary">Career</NavLink>
  </div>

  {/* Login/Logout */}
  <div className="login-btn flex flex-wrap items-center gap-2 sm:gap-5">
    <img className=" w-12 rounded full" src={`${ user ? user.photoURL : userIcon}`} alt="User" />
    {user ? (
      <button onClick={handleLogout} className="btn btn-primary px-4 sm:px-10 text-white text-xs sm:text-sm">
        LogOut
      </button>
    ) : (
      <Link to="/auth/login" className="btn btn-primary px-4 sm:px-10 text-white text-xs sm:text-sm">
        Login
      </Link>
    )}
  </div>
</div>

  );
};

export default NavBar;

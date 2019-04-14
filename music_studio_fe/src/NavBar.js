import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {
  return(
    <div className="nav-bar">
      <h3>Sound Studio</h3>
      <ul>
        <li className="navLink">
          <Link to="/home">Log In/ Sign up</Link>
        </li>
        <li className="navLink">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navLink">
          <Link to="/studio">Studio</Link>
        </li>
      </ul>

      <input type="text" placeholder="Search users"/>

      <select id="">
        <option value="tag">Project Tag</option>
      </select>
    </div>

  )
}

export default NavBar;

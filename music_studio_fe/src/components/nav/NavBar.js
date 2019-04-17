import React from "react";
import { Link } from "react-router-dom"
import UserSearch from "./UserSearch"

const NavBar = (props) => {
  return(
    <div className="nav-bar">
      <h3>Sound Studio</h3>
      <ul>
        <li className="navLink">
          <Link to="/login">Log In/ Sign up</Link>
        </li>
        <li className="navLink">
          <Link to="/studio">Studio</Link>
        </li>
      </ul>

      <UserSearch selectedUser={ props.selectedUser }users={ props.users }></UserSearch>

      <select id="">
        <option value="tag">Project Tag</option>
      </select>
    </div>

  )
}

export default NavBar;

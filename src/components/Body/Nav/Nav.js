import React from 'react'
import "./Nav.css"
import { AiOutlineSearch} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__search">
        <AiOutlineSearch style={{ color: "white", fontSize: "20" }} />
        <input
          className="nav__search__input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="nav__icons">
        <FiSettings />
        <img
          src={`https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png`}
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav
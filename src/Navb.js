import React from "react";
import { Link } from "react-router-dom";

import "./Navb.css";

const Navb = () => {
  return (
    <div className="menu-area">
      <ul className="menu-list">
        <Link className="nav-home" to="/">
          <li>HOME</li>
        </Link>
        <Link className="nav-link" to="/about">
          <li>회사정보</li>
        </Link>
        <Link className="nav-link" to="/service">
          <li>서비스</li>
        </Link>
        <Link className="nav-link" to="/contact">
          <li>연락처</li>
        </Link>
        <Link className="nav-link" to="/feedback">
          <li>후기</li>
        </Link>
        <Link className="nav-link" to="/admin">
          <li>Admin</li>
        </Link>

      </ul>
    </div>
  );
};

export default Navb;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export function Header() {
  return (
    <>
      <div className="left-header">
        <p className="title-web">RENT MOTEL</p>
      </div>
      <div className="right-header">
        {/* <Link className="button-home-page" to="/login">
          Đăng nhập
        </Link> */}
        <button className="button-home-page">Đăng nhập</button>
        <button className="button-home-page">Đăng ký</button>
      </div>
    </>
  );
}

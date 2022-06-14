import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemHomePage } from "../component/ItemHomePage";
import "./CSS/HomePage.css";

const listItem = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

export default function HomePage() {
  return (
    <div className="wrap-home-page">
      <div className="header">
        <div className="left-header">
          <p className="title-web">RENT MOTEL</p>
        </div>
        <div className="right-header">
          <Link to="/login">
            <button className="button-home-page">Đăng nhập</button>
          </Link>
          <Link to="/register">
            <button className="button-home-page">Đăng ký</button>
          </Link>
        </div>
      </div>
      <div className="home-page">
        {listItem.map((item) => {
          return <ItemHomePage></ItemHomePage>;
        })}
      </div>
    </div>
  );
}

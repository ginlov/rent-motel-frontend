import React, { useState } from "react";
import image from "../image/ItemImage.jpg";
import locationIcon from "../image/Location-Icon-1.png";
import moneyIcon from "../image/Money-Icon-1.png";
import areaIcon from "../image/Area-Icon-1.png";
import "./styles.css";

export function ItemHomePage() {
  return (
    <>
      <div className="item-home-page">
        <img src={image} alt=""></img>
        <div className="item-detail">
          <p className="item-title">Phòng trọ sinh viên giá rẻ</p>
          <div className="item-address">
            <img
              src={locationIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            Phường Bách Khoa
          </div>
          <div className="item-price">
            <img
              src={moneyIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            2.000.000/tháng
          </div>
          <div className="item-area">
            <img
              src={areaIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            20m2
          </div>
        </div>
      </div>
    </>
  );
}

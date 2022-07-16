import React, { useState } from "react";
import image from "../image/ItemImage.jpg";
import locationIcon from "../image/Location-Icon-1.png";
import moneyIcon from "../image/Money-Icon-1.png";
import areaIcon from "../image/Area-Icon-1.png";
import { Navigate } from "react-router-dom";
import "./styles.css";

export function ItemRenter(props) {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <div className="item-home-page" onClick={() => setIsClick(true)}>
        <img src={props.item_image} alt="" style={{ height: "250px" }}></img>
        <div className="item-detail">
          <p className="item-title">{props.item_title}</p>
          <div className="item-address">
            <img
              src={locationIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            {props.item_address}
          </div>
          <div className="item-price">
            <img
              src={moneyIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            {props.item_price}/tháng
          </div>
          <div className="item-area">
            <img
              src={areaIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            {props.item_area}m2
          </div>
        </div>
      </div>
      {isClick && (
        <Navigate to={`/itemRenter/${props.item_id}`} replace={true} />
      )}
    </>
  );
}

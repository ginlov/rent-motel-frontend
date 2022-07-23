import React, { useEffect, useState } from "react";
import axios from "../../api";
import { ItemAdmin } from "../../component/ItemAdmin";
import { ItemOwner } from "../../component/ItemOwner";
import styles from "../CSS/MyMotelPage.module.css";

function status(motelDetail) {
  if (motelDetail.requestPublic) return false;
  return true;
}

export default function MotelWindow() {
  const [listMotel, setListMotel] = useState([]);
  useEffect(() => {
    axios.get("/motels").then((response) => {
      console.log(response.data.data.items);
      setListMotel(response.data.data.items);
    });
  }, []);

  return (
    <>
      <div className={styles.wrap_item}>
        {listMotel.map((item) => {
          return (
            <ItemAdmin
              key={item.id}
              item_id={item.id}
              item_title={item.summary}
              item_address={item.address.city}
              item_price={item.price}
              item_area={item.square}
              item_image={item.imageUrl}
              status={status(item)}
            />
          );
        })}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemOwner } from "../component/ItemOwner";
import NavbarOwner from "../component/NavbarOwner";
import Button from "@mui/material/Button";
import styles from "./CSS/MyMotelPage.module.css";
import axios from "../api";
import MockupAddMotel from "../component/MockupAddMotel";
import style from "./style.module.css";

export default function MyMotelPage() {
  const [listMotel, setListMotel] = useState([]);
  const [openFormAddMotel, setOpenFormAddMotel] = useState(false);

  useEffect(() => {
    axios.get("/motels/owned?limit=20&offset=1").then((response) => {
      setListMotel(response.data.data);
    });
  }, []);
  return (
    <div className={style.wrap_page}>
      <div className={style.wrap_content}>
        <MockupAddMotel
          callback={setOpenFormAddMotel}
          status={openFormAddMotel}
        />
        <div className={styles.wrap_button}>
          <Button
            variant="contained"
            onClick={() => {
              setOpenFormAddMotel(true);
            }}
          >
            Thêm nhà trọ
          </Button>
        </div>
        <div className={styles.wrap_item}>
          {listMotel.map((item) => {
            return (
              <ItemOwner
                key={item.id}
                item_id={item.id}
                item_title={item.summary}
                item_address={item.address.city}
                item_price={item.price}
                item_area={item.square}
                item_image={item.imageUrl}
              ></ItemOwner>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React, {useEffect, useState} from "react";
import axios from "../../api";
import {ItemOwner} from "../../component/ItemOwner"
import styles from "../CSS/MyMotelPage.module.css";

export default function MotelWindow() {
    const [listMotel, setListMotel] = useState([{id: 1,
    summary: "new motel", address: {"city": "Hanoi"}, price: 2000000,
    square: 30, imageUrl: null}])

    // useEffect(() => {
    //     axios
    //         .get("/motels?order-by=price-desc&limit=2&offset=1")
    //         .then((response) => {
    //             setListMotel(response.data.data);
    //         });
    // }, []);
    return (
        <>
            <div className={styles.wrap_item}>
                {listMotel.map((item)=>{
                    return (
                        <ItemOwner
                            key={item.id}
                            item_id={item.id}
                            item_title = {item.summary}
                            item_address = {item.address.city}
                            item_price={item.price}
                            item_area={item.square}
                            item_image={item.imageUrl}/>
                    )
                })}
            </div>
        </>
    )
}
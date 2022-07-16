import * as React from "react";
import { useState } from "react";
import Sidebar from "./SideBar";
import ChatWindow from "./ChatWindow";
import InforWindow from "./InforWindow";
import MyRentMotelWindow from "./MyRentMotel";

export default function HomePageRenter() {
  const [index, setIndex] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar callBack={setIndex} />
      {index % 3 === 0 && <ChatWindow></ChatWindow>}
      {index % 3 === 1 && <InforWindow></InforWindow>}
      {index % 3 === 2 && <MyRentMotelWindow></MyRentMotelWindow>}
    </div>
  );
}

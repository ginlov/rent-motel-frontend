import * as React from "react";
import { useState } from "react";
import ChatWindow from "./ChatWindow";
import InforWindow from "./InforWindow";
import StatisticWindow from "./StatisticWindow";
import Sidebar from "./SideBar";

export default function HomePageOwner() {
  const [index, setIndex] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar callBack={setIndex} />
      {index % 3 === 0 && <ChatWindow></ChatWindow>}
      {index % 3 === 1 && <InforWindow></InforWindow>}
      {index % 3 === 2 && <StatisticWindow></StatisticWindow>}
    </div>
  );
}

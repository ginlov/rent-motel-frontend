import * as React from "react";
import NavbarOwner from "../../component/NavbarOwner";
import ChatWindow from "./ChatWindow";
import Sidebar from "./SideBar";

export default function HomePageOwner() {
  return (
    <>
      <NavbarOwner />
      <Sidebar />
      <ChatWindow />
    </>
  );
}

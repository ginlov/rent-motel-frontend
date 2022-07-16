import * as React from "react";
import Sidebar from "./SideBar";
import {useState} from "react";
import ChatWindow from "./ChatWindow";
import MailWindow from "./MailWindow";
import MotelWindow from "./MotelWindow";
import UserWindow from "./UserWindow";
import PaymentWindow from "./PaymentWindow";

export default function AdminPage() {
    const [index, setIndex] = useState(0);
    return (
        <div style={{display: "flex"}}>
            <Sidebar callBack={setIndex}/>
            {index % 5 === 0 && <ChatWindow></ChatWindow>}
            {index % 5 === 1 && <MailWindow></MailWindow>}
            {index % 5 === 2 && <MotelWindow></MotelWindow>}
            {index % 5 === 3 && <UserWindow></UserWindow>}
            {index % 5 === 4 && <PaymentWindow></PaymentWindow>}
        </div>
    )
}
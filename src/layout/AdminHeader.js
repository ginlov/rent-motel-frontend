import React, {useState, useEffect} from "react";
import NavbarAdmin from "../component/NavbarAdmin";
import axios from "../api";

export default function AdminHeader() {
    const [name, setName] = useState("")
    useEffect(()=>{
        axios.get("/admin/me").then((response) =>{
            setName(response.data.data.firstName + " " + response.data.data.lastName)
        });
    }, []);
    return <NavbarAdmin name={name} />;
}
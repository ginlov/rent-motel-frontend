import React, { useState, useEffect } from "react";
import NavbarRenter from "../component/NavbarRenter";
import axios from "../api";

export default function RenterHeader() {
  const [name, setName] = useState("");
  useEffect(() => {
    axios.get("/users/me").then((response) => {
      setName(response.data.data.firstName + " " + response.data.data.lastName);
    });
  }, []);
  return <NavbarRenter name={name} />;
}

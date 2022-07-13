import React, { useState, useEffect } from "react";
import NavbarOwner from "../component/NavbarOwner";
import axios from "../api";

export default function OwnerHeader() {
  const [name, setName] = useState("");
  useEffect(() => {
    axios.get("/users/me").then((response) => {
      setName(response.data.data.firstName + " " + response.data.data.lastName);
    });
  }, []);
  return <NavbarOwner name={name} />;
}

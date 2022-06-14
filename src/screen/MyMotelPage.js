import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemHomePage } from "../component/ItemHomePage";
import Navbar from "../component/Navbar";

const listItem = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

export default function MyMotelPage() {
  return (
    <>
      <Navbar />
      <div className="home-page">
        {listItem.map((item) => {
          return <ItemHomePage></ItemHomePage>;
        })}
      </div>
    </>
  );
}

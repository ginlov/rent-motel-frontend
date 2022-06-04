import React, { useState } from "react";
import { ItemHomePage } from "./ItemHomePage";
import "./styles.css";

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

export function HomePage() {
  return (
    <>
      <div className="home-page">
        {listItem.map((item) => {
          return <ItemHomePage></ItemHomePage>;
        })}
      </div>
    </>
  );
}

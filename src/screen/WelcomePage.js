import * as React from "react";
import Navbar from "../component/NavbarWelcome";
import styles from "./CSS/WelcomePage.module.css";
import { ItemHomePage } from "../component/ItemHomePage";

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

export default function WelcomePage() {
  return (
    <>
      <div className={styles.wrap_item}>
        {listItem.map((item) => {
          return <ItemHomePage></ItemHomePage>;
        })}
      </div>
    </>
  );
}

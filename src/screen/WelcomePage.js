import * as React from "react";
import WelcomeImage from "../image/WelcomeImage.jpg";

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
      <img src={WelcomeImage} alt="" style={{ width: "100%" }}></img>
    </>
  );
}

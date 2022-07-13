import WelcomeHeader from "./WelcomeHeader";
import MainFooter from "./MainFooter";
import { Outlet } from "react-router-dom";

export default function WelcomeLayout(props) {
  return (
    <>
      <WelcomeHeader />
      <main>{props.children}</main>
      <MainFooter />
    </>
  );
}

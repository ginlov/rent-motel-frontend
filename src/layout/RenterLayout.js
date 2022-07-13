import RenterHeader from "./RenterHeader";
import MainFooter from "./MainFooter";

export default function RenterLayout(props) {
  return (
    <>
      <RenterHeader></RenterHeader>
      <main>{props.children}</main>
      <MainFooter></MainFooter>
    </>
  );
}

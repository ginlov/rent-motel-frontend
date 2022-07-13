import OwnerHeader from "./OwnerHeader";
import MainFooter from "./MainFooter";

export default function OwnerLayout(props) {
  return (
    <>
      <OwnerHeader></OwnerHeader>
      <main>{props.children}</main>
      <MainFooter></MainFooter>
    </>
  );
}

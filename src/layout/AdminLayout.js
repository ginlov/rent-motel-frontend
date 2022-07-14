import MainFooter from "./MainFooter";
import AdminHeader from "./AdminHeader";

export default function AdminLayout(props){
    return (
        <>
            <AdminHeader></AdminHeader>
            <main>{props.children}</main>
            <MainFooter></MainFooter>
        </>
    );
}
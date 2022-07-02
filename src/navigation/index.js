import { Route, Routes } from "react-router-dom";
import { RegisterForm } from "../component/RegisterForm";
import OwnerPage from "../screen/OwnerPage/OwnerPage";
import LoginPage from "../screen/LoginPage";
import SearchPage from "../screen/SearchPage";
import MyMotelPage from "../screen/MyMotelPage";
import WelcomePage from "../screen/WelcomePage";
import RegisterPage from "../screen/RegisterPage";
import ItemOwner from "../screen/ItemOwner";
import RenterPage from "../screen/RenterPage/RenterPage";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/search" element={<SearchPage></SearchPage>}></Route>
      <Route path="/mymotel" element={<MyMotelPage></MyMotelPage>}></Route>
      <Route path="/itemOwner/:id" element={<ItemOwner></ItemOwner>}></Route>
      <Route path="/owner" element={<OwnerPage></OwnerPage>}></Route>
      <Route path="/renter" element={<RenterPage></RenterPage>}></Route>
    </Routes>
  );
}

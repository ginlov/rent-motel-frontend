import { Route, Routes } from "react-router-dom";
import { RegisterForm } from "../component/RegisterForm";
import HomePageOwner from "../screen/HomePageOwner";
import LoginPage from "../screen/LoginPage";
import SearchPage from "../screen/SearchPage";
import MyMotelPage from "../screen/MyMotelPage";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePageOwner></HomePageOwner>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
      <Route path="/search" element={<SearchPage></SearchPage>}></Route>
      <Route path="/mymotel" element={<MyMotelPage></MyMotelPage>}></Route>
    </Routes>
  );
}

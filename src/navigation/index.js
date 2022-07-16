import { Route, Routes, Switch } from "react-router-dom";
import { RegisterForm } from "../component/RegisterForm";
import OwnerPage from "../screen/OwnerPage/OwnerPage";
import LoginPage from "../screen/LoginPage";
import AdminPage from "../screen/AdminPage/AdminPage";
import SearchPage from "../screen/SearchPage";
import MyMotelPage from "../screen/MyMotelPage";
import WelcomePage from "../screen/WelcomePage";
import RegisterPage from "../screen/RegisterPage";
import ItemOwner from "../screen/ItemOwner";
import RenterPage from "../screen/RenterPage/RenterPage";
import NavbarOwner from "../component/NavbarOwner";
import OwnerLayout from "../layout/OwnerLayout";
import RenterLayout from "../layout/RenterLayout";
import WelcomeLayout from "../layout/WelcomLayout";
import ItemRenter from "../screen/ItemRenter";
import AdminLayout from "../layout/AdminLayout";

export default function RootRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/mymotel"
          element={
            <OwnerLayout>
              <MyMotelPage />
            </OwnerLayout>
          }
        ></Route>
        <Route
          path="/itemOwner/:id"
          element={
            <OwnerLayout>
              <ItemOwner />
            </OwnerLayout>
          }
        ></Route>
        <Route
          path="/owner"
          element={
            <OwnerLayout>
              <OwnerPage />
            </OwnerLayout>
          }
        ></Route>

        <Route
          path="/search"
          element={
            <RenterLayout>
              <SearchPage />
            </RenterLayout>
          }
        ></Route>
        <Route
          path="/renter"
          element={
            <RenterLayout>
              <RenterPage />
            </RenterLayout>
          }
        ></Route>
        <Route
          path="/itemRenter/:id"
          element={
            <RenterLayout>
              <ItemRenter />
            </RenterLayout>
          }
        ></Route>

        <Route
          path="/"
          element={
            <WelcomeLayout>
              <WelcomePage />
            </WelcomeLayout>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <WelcomeLayout>
              <LoginPage />
            </WelcomeLayout>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <WelcomeLayout>
              <RegisterPage />
            </WelcomeLayout>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminPage />
            </AdminLayout>
          }
        ></Route>
      </Routes>
    </>
  );
}

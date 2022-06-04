import logo from "./logo.svg";
import "./App.css";
import { LoginForm } from "./component/LoginForm";
import { Header } from "./component/Header";
import { HomePage } from "./component/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { RegisterForm } from "./component/RegisterForm";

export function App() {
  return (
    <>
      {/* <div className="Header">
        <Header></Header>
      </div>
      <div className="Body">
        <HomePage></HomePage>
      </div> */}
      {/* <LoginForm></LoginForm> */}
      {/* <RegisterForm></RegisterForm> */}
    </>
  );
}

export default App;

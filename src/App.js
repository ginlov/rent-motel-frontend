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
import RootRouter from "./navigation";

export function App() {
  return (
    <>
      <RootRouter></RootRouter>
    </>
  );
}

export default App;

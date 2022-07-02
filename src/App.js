import "./App.css";
import RootRouter from "./navigation";
import axios from "./api";

const token = localStorage.getItem("token");
if (token) {
  console.log(token);
  axios.defaults.headers.common = {
    Authorization: `bearer ${token}`,
  };
}

export function App() {
  return (
    <>
      <RootRouter />
    </>
  );
}

export default App;

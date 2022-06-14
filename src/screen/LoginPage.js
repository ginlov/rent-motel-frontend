import LoginForm from "../component/LoginForm";
import Header from "../component/Header";

export default function LoginPage() {
  return (
    <div className="login-page">
      <Header></Header>
      <div className="wrap-login-form">
        <LoginForm></LoginForm>;
      </div>
    </div>
  );
}

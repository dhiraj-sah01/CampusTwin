import { useNavigate } from "react-router-dom";
import SignIn_btn_clicked from "./functions/signIn_btn_clicked";

function Login() {
  const navigate = useNavigate();
  
  async function handleLogin() {
    const user = await SignIn_btn_clicked();

    if (!user.email.endsWith("@kiit.ac.in")) {
      alert("Only KIIT email addresses are allowed.");
      return;
    }

    navigate("/home");
  }

}

export default Login;
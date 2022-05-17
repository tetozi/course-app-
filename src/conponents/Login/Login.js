import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService"
import "./Login.css";
import { useAuthContext } from "../../contexts/AuthContext"
import { toast } from "react-toastify";
import { useState } from "react";
import loginValidator from "./helperLogin";


const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const takeEmail = (e) => {
    setEmail(e.target.value);
  };

  const takePassword = (e) => {
    setPassword(e.target.value);
  };


  const onLoginHandler = (e) => {
    e.preventDefault();
    
  if (loginValidator(email,password)) {
    authService.login(email, password)
    .then((authData) => {
      login(authData);
      toast.success('You are succsessfuly Logged In', {
        position: toast.POSITION.TOP_CENTER
      })
      navigate("/");
    })
    .catch(err => {
      toast.error(err)
  
    });
  }
   
  }
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={onLoginHandler} method="POST">
          <input type="text" placeholder="email" id="email" name="email" value={email}
          onChange={takeEmail} />
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            value={password}
            onChange={takePassword}
          />
          <button type="submit" value="Login">
            login
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login
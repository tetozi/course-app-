import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService"
import { toast } from "react-toastify";
import { useState } from "react";
import helperRegister from "./registerHelper";

const Register = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState("");

    const takeEmail = (e) => {
        setEmail(e.target.value)
    }

    const takeUsername = (e) => {
        setUser(e.target.value);
    };

    const takePassword = (e) => {
        setPassword(e.target.value);
    };
    const takeConfirmPassword = (e) => {
        setPasswordConfirm(e.target.value);
    };


    const onRegisterHandler = (e) => {
        e.preventDefault();
        if (helperRegister(username,email, password, passwordConfirm)) {
            authService
                .register(username,email, password, passwordConfirm)
                .then((authData) => {
                    login(authData);
                    toast.success('You are succsessfuly sign in', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    navigate("/");
                })
                .catch((err) => {
                    toast.error(err)

                });
        }

    };

    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={onRegisterHandler} method="POST">
                    <input type="text" placeholder="username" id="username" name="username" value={username} onChange={takeUsername} />
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={takeEmail}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={takePassword}
                    />
                    <input
                        type="password"
                        placeholder="passwordConfirm"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={takeConfirmPassword}
                    />
                    <button type="submit" value="Login">
                        Register
                    </button>
                </form>
            </div>
        </div>

    )

}


export default Register
import { useNavigate } from "react-router";
import { LoginForm } from "../../components/forms/login-form/login-form";
import "./LoginView.css";
import { authService } from "../../../services/auth-service";
import { useEffect } from "react";

export function LoginView() {

    const navigate = useNavigate();

    const goToRegister = () => {
        navigate("/register");
    }

    const goToRacine = () => {
        navigate("/");
    }

    useEffect(() => {
        if (authService.isConnected()){
            goToRacine();   
        }
    }, []);

    return (
        <div className="login-view">
            <LoginForm onValidate={(data) => {
                console.log("Login data:", data);
                authService.connect(data).then(() => {
                    console.log("Login successful");
                    goToRacine();
                }).catch((error) => {
                    console.error("Login failed:", error);
                    alert("Login failed: " + error.message);
                });
            }} />
            <p>Pas de compte ? <a onClick={goToRegister}>Créer un compte</a></p>
        </div>
    );
}

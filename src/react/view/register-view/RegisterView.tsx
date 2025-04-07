import { useNavigate } from "react-router";
import { RegisterForm } from "../../components/forms/register-form/register-form";
import "./RegisterView.css";

export function RegisterView() {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <div className="register-view">
            <RegisterForm onValidate={(data) => {
                console.log("Register data:", data);
            }} />
            <p>Déjà un compte ? <a onClick={goToLogin}>Connectez-vous</a></p>
        </div>
    );
}
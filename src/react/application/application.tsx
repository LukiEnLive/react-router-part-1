import { LoginView } from "../view/login-view/LoginView"
import { RegisterView } from "../view/register-view/RegisterView"
import { BrowserRouter, Routes, Route } from "react-router"
import { MessengerView } from "../view/messenger-view/MessengerView"

export function Application() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MessengerView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/register" element={<RegisterView />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
import { LoginData } from "../models/login-data";
import { RegisterData } from "../models/register-data";
import { UserData } from "../models/user-data";

class AuthService
{
    public async register(_data: RegisterData): Promise<boolean>
    {
        return true;
    }

    public async connect(_data: LoginData): Promise<boolean>
    {
        this.saveToken("token-value");
        return true;
    }

    public disconnect()
    {
        this.saveToken(null);
    }

    public isConnected()
    {
        return this.loadToken() !== null;
    }

    public getUser(): UserData | null
    {
        const token = this.loadToken();

        if (token === null)
            return null;

        const user: UserData = { id: 1, lastname: "My", firstname: "Name" };

        return user;
    }

    private saveToken(token: string | null)
    {
        if (token)
            localStorage.setItem("token", token);
        else
            localStorage.removeItem("token");
    }

    private loadToken(): string | null
    {
        return localStorage.getItem("token");
    }
}

export const authService = new AuthService();
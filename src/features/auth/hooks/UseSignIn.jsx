import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UseAuth from "../context/UseAuth";

export default function UseSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, user, loginGoogle, loginEmailPassword, logout } = UseAuth(); //

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const loggedUser = loginEmailPassword(email, password);

        //toast notification
        toast.promise(
            loggedUser,
            {
                loading: "Cargando...",
                success: "Inicio de sesión exitoso",
                error: "Error al inciar sesión",
            },
            {
                position: "top-center",
            }
        );

        try {
            await loggedUser;
            navigate("/courses");
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignInGoogle = async () => {
        try {
            const userLogged = await loginGoogle();
            navigate("/courses");
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignout = () => {
        navigate("/login");
        logout();
    };

    return { email, password, setEmail, setPassword, handleLogin, handleSignInGoogle, handleSignout };
}

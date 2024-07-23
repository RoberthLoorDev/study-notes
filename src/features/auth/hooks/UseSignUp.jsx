import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UseAuth from "../context/UseAuth";

export default function UseSignUp() {
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const { registerEmailPassword, registerGoogle } = UseAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            toast.info("Las contraseñas no coinciden", {
                position: "top-right",
            });
            return;
        }

        const registeredUser = registerEmailPassword(email, password);

        //toast notification
        toast.promise(
            registeredUser,
            {
                loading: "Cargando...",
                success: "Usuario registrado",
                error: "Error al crear usuario",
            },
            {
                position: "top-right",
            }
        );

        try {
            await registeredUser;

            navigate("/courses");
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignInGoogle = async () => {
        const registerUserWithGoogle = await registerGoogle();

        try {
        } catch (error) {
            console.error(error);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSubmit,
        handleSignInGoogle,
    };
}

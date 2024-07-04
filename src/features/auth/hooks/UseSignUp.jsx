import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "sonner";
import { auth } from "../../../../firebase";

export default function UseSignUp() {
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            toast.info("Las contraseñas no coinciden", {
                position: "top-right",
            });
            return;
        }

        const registerUserPromise = createUserWithEmailAndPassword(auth, email, password);

        //toast notification
        toast.promise(
            registerUserPromise,
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
            await registerUserPromise;
        } catch (error) {
            console.error(error);
        }
    };
    return { email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, handleSubmit };
}

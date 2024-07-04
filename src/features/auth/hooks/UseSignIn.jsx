import React, { useState } from "react";
import { toast } from "sonner";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../firebase";

export default function UseSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        const loggedUser = signInWithEmailAndPassword(auth, email, password);

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
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignInGoogle = async () => {
        await signInWithPopup(auth, provider);
        try {
        } catch (error) {
            console.error(error);
        }
    };

    return { email, password, setEmail, setPassword, handleLogin, handleSignInGoogle };
}

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useContext } from "react";
import { auth, provider } from "../../../../firebase";
import { AuthContext } from "./AuthContext";

export default function UseAuth() {
    const { user, loading } = useContext(AuthContext);

    const loginEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const registerEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const registerGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    const loginGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    const logout = () => {
        return signOut(auth);
    };

    return { user, loading, loginGoogle, loginEmailPassword, logout, registerEmailPassword, registerGoogle };
}

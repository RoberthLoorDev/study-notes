import { createContext, useEffect, useState } from "react";
import { auth } from "../../../../firebase";

export const AuthContext = createContext();

import React from "react";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsuscribe();
    }, []);

    return <AuthContext.Provider value={{ user, loading }}>{!loading && children}</AuthContext.Provider>;
}

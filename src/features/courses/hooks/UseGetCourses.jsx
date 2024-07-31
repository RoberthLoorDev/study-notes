import React, { useCallback, useEffect, useState } from "react";
import UseAuth from "../../auth/context/UseAuth";
import { getCoursesByUser } from "../api/api";

export default function UseGetCourses() {
    const { user } = UseAuth();
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        if (!user) {
            showErrorToast("Usuario no autenticado. Inicie sesión de nuevo");
            return;
        }

        try {
            const dataCourses = await getCoursesByUser(user);
            setCourses(dataCourses);
        } catch (error) {
            console.error("[UseGetCourses]", error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return { courses, fetchCourses, setCourses };
}

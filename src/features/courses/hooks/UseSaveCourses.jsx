import React, { useState } from "react";
import { saveCourse, uploadImage } from "../api/api";
import useAuth from "../../auth/context/UseAuth";
import UseGetCourses from "./UseGetCourses";
import useToastNotification from "../../common/hooks/useToastNotification";
import eventUpdateCoursesList from "../events/eventUpdateCoursesList";

export default function UseSaveCourses() {
    const { user } = useAuth();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const { fetchCourses } = UseGetCourses();
    const { updateCoursesList } = eventUpdateCoursesList();

    //toast notification
    const { showPromiseToast, showErrorToast } = useToastNotification();

    const handleSaveCourse = async () => {
        if (!user) {
            showErrorToast("Usuario no autenticado. Inicie sesión de nuevo");
            return;
        }

        if (!name) {
            showErrorToast("El nombre del curso es obligatorio");
            return;
        }

        try {
            const createCourse = async () => {
                const imageUrlToSave = await uploadImage(image);
                await saveCourse(user, name, imageUrlToSave);
                updateCoursesList();
            };

            showPromiseToast(createCourse, {
                loading: "Creando curso",
                sucess: "Curso creado exitosamente",
                error: "Error al crear el curso",
            });
        } catch (error) {
            console.error("[UseSaveCourses]", error);
        }
    };

    return { setName, setImage, handleSaveCourse, image };
}

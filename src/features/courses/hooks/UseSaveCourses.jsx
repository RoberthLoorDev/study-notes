import React, { useState } from "react";
import { saveCourse, uploadImage } from "../api/api";
import useAuth from "../../auth/context/UseAuth";
import UseGetCourses from "./UseGetCourses";
import useToastNotification from "../../common/hooks/useToastNotification";

export default function UseSaveCourses() {
    const { user } = useAuth();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const { fetchCourses } = UseGetCourses();

    //toast notification
    const { showPromiseToast } = useToastNotification();

    const handleSaveCourse = async () => {
        try {
            const createCourse = async () => {
                const imageUrlToSave = await uploadImage(image);
                await saveCourse(user, name, imageUrlToSave);

                // event that updates the courses
                const updateEvent = new Event("updateList");
                window.dispatchEvent(updateEvent);
            };

            showPromiseToast(createCourse, {
                loading: "Creando curso",
                sucess: "Curso creado exitosamente",
                error: "Error al crear el curso",
            });
        } catch (error) {
            console.error(error);
        }
    };

    return { setName, setImage, handleSaveCourse };
}

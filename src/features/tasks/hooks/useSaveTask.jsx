import React, { useState } from "react";
import { saveTask } from "../api/taskApi";
import useToastNotification from "../../common/hooks/useToastNotification";

export default function useSaveTask() {
    //toast notification
    const { showErrorToast, showPromiseToast } = useToastNotification();

    const [idCourse, setIdCourse] = useState("");
    const [title, setTitle] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [description, setDescription] = useState("");

    const handleSaveCourse = async () => {
        if (!idCourse) {
            showErrorToast("Seleccione un curso");
            return;
        }

        if (!title || !deliveryDate) {
            showErrorToast("No dejar campos vacíos");
            return;
        }

        try {
            showPromiseToast(
                async () => {
                    await saveTask(idCourse, title, deliveryDate, description);
                },
                {
                    loading: "Creando Tarea",
                    sucess: "Tarea creada con éxito",
                    error: "Error al crear la tarea seleccionada",
                }
            );
        } catch (error) {
            console.error("[useSaveTask]", error);
        }
    };

    return { handleSaveCourse, setDeliveryDate, setDescription, setIdCourse, setTitle };
}

import axios from "axio";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

//save task
export const saveTask = async (courseId, title, deliveryDate, description) => {
    if (!courseId || !title || !description) throw new Error("Faltan datos requeridos para guardar la tarea");

    try {
        const taskDataToSave = {
            idCourse: courseId,
            title,
            deliveryDate: new Date(deliveryDate),
            description,
            createAt: new Date(),
            status: "To start",
        };

        const taskDocRef = doc(collection(db, "tasks"));
        await setDoc(taskDocRef, taskDataToSave);
    } catch (error) {
        console.error("Error al guardar el curso", error);
        throw new Error("No se logró almacenar la tarea");
    }
};

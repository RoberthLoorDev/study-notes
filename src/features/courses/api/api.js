//save course
import { db } from "../../../../firebase";
import { collection, doc, setDoc, query, where, getDocs, getDoc, updateDoc } from "firebase/firestore";
import axios from "axios";

export const saveCourse = async (user, name, imageUrl) => {
    if (!user || !name || !imageUrl) {
        throw new Error("Faltan datos requeridos para guardar el curso");
    }

    try {
        const courseDataToSave = {
            idUser: user.uid,
            name,
            imageUrl,
            isDeleted: false,
            createAt: new Date(),
        };

        const courseDocRef = doc(collection(db, "courses"));
        await setDoc(courseDocRef, courseDataToSave);
    } catch (error) {
        console.error("Error al guardar el curso", error);
        throw new Error("No se pudo guardar el curso");
    }
};

//get courses for user
export const getCoursesByUser = async (user) => {
    if (!user) throw new Error("Falta inicio se sesión del usuario");

    try {
        const courseCollectionRef = collection(db, "courses");
        const q = query(courseCollectionRef, where("idUser", "==", user.uid));
        const querySnapshot = await getDocs(q);

        const coursesArray = [];
        querySnapshot.forEach((doc) => coursesArray.push({ id: doc.id, ...doc.data() }));

        if (!coursesArray) return [];

        return coursesArray;
    } catch (error) {
        console.error("Error al obtener los cursos", error);
        throw new Error("No se pudieron obtener los datos de los cursos. Por favor, inténtalo de nuevo.");
    }
};

//upload image to save
export const uploadImage = async (file) => {
    if (!file) throw new Error("No se ha seleccionado una imagen válida");

    const apiKeyImgBB = import.meta.env.VITE_API_KEY_IMGBB;
    const url = "https://api.imgbb.com/1/upload";

    const formData = new FormData(); //help forms with images
    formData.append("image", file);

    try {
        const response = await axios.post(`${url}?key=${apiKeyImgBB}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data", //serves to deal with images
            },
        });

        const imageUploaded = response.data.data.display_url;

        return imageUploaded;
    } catch (error) {
        console.error("Error al subir al almacenar la imagen", error);
        throw new Error("No se logró almacenar la imagen. Por favor, inténtalo de nuevo");
    }
};

//delete course - deletion logically, not physically
export const deleteCourse = async (courseId) => {
    if (!courseId) throw new Error("Error al seleccionar el curso");

    const dateDeleted = new Date();
    const updateDocument = {
        isDeleted: true,
        dateDeleted,
    };

    try {
        const courseDocRef = doc(db, "courses", courseId);
        await updateDoc(courseDocRef, updateDocument);
        console.log("Curso actualizado");
    } catch (error) {
        console.error("Error al eliminar el curso", error);
        throw new Error("No se ha podido eliminar el curso. Por favor, inténtalo de nuevo");
    }
};

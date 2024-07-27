//save course
import { db } from "../../../../firebase";
import { collection, doc, setDoc, query, where, getDocs, getDoc } from "firebase/firestore";
import axios from "axios";

export const saveCourse = async (user, name, imageUrl) => {
    try {
        const courseDataToSave = {
            idUser: user.uid,
            name,
            imageUrl,
            isDeleted: false,
        };

        const courseDocRef = doc(collection(db, "courses"));
        await setDoc(courseDocRef, courseDataToSave);
    } catch (error) {
        console.error(error);
    }
};

//get courses for user
export const getCoursesByUser = async (user) => {
    try {
        const courseCollectionRef = collection(db, "courses");
        const q = query(courseCollectionRef, where("idUser", "==", user.uid));
        const querySnapshot = await getDocs(q);

        const coursesArray = [];
        querySnapshot.forEach((doc) => coursesArray.push({ id: doc.id, ...doc.data() }));

        if (!coursesArray) return [];

        return coursesArray;
    } catch (error) {
        console.error(error);
    }
};

//upload image to save
export const uploadImage = async (file) => {
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
        console.error(error);
    }
};

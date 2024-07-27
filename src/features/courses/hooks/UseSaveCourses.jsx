import React, { useState } from "react";
import { saveCourse, uploadImage } from "../api/api";
import useAuth from "../../auth/context/UseAuth";

export default function UseSaveCourses() {
    const { user } = useAuth();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");

    const handleSaveCourse = async () => {
        const imageUrlToSave = await uploadImage(image);
        console.log(imageUrlToSave);
        try {
            await saveCourse(user, name, imageUrlToSave);
        } catch (error) {
            console.error(error);
        }
    };

    return { setName, setImage, handleSaveCourse };
}

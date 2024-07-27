import React, { useState } from "react";
import { saveCourse, uploadImage } from "../api/api";
import useAuth from "../../auth/context/UseAuth";
import UseGetCourses from "./UseGetCourses";

export default function UseSaveCourses() {
    const { user } = useAuth();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const { fetchCourses } = UseGetCourses();

    const handleSaveCourse = async () => {
        const imageUrlToSave = await uploadImage(image);
        try {
            await saveCourse(user, name, imageUrlToSave);
            await fetchCourses();
        } catch (error) {
            console.error(error);
        }
    };

    return { setName, setImage, handleSaveCourse };
}

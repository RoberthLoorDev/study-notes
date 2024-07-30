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
        try {
            const imageUrlToSave = await uploadImage(image);
            await saveCourse(user, name, imageUrlToSave);
            console.log("Curso creado");

            // update the courses list after from create a new course
            await fetchCourses();
            // event that updates the courses
            const updateEvent = new Event("updateList");
            window.dispatchEvent(updateEvent);
        } catch (error) {
            console.error(error);
        }
    };

    return { setName, setImage, handleSaveCourse };
}

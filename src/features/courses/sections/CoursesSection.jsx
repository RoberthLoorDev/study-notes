import React, { useEffect, useState } from "react";
import CoursesCard from "../components/CoursesCard";
import UseGetCourses from "../hooks/UseGetCourses";

export default function CoursesSection() {
    const { courses, fetchCourses } = UseGetCourses();
    const [coursesForShow, setCoursesForShow] = useState([]);

    useEffect(() => {
        setCoursesForShow(courses);
    }, [courses]);

    // Listen custom events
    useEffect(() => {
        const reciveEvent = async () => {
            //gets updated courses
            await fetchCourses();
        };
        window.addEventListener("updateList", reciveEvent);
        return () => {
            window.removeEventListener("updateList", reciveEvent);
        };
    }, [fetchCourses]);

    return (
        <section className="mt-[35px] grid grid-cols-[repeat(auto-fit,minmax(302.819px,1fr))] gap-4 w-full max-w-[150rem]">
            {coursesForShow.length > 0 ? (
                coursesForShow
                    .filter((course) => !course.isDeleted)
                    .map((course, index) => (
                        <CoursesCard id={course.id} image={course.imageUrl} title={course.name} key={index} />
                    ))
            ) : (
                <p className="text-center text-white text-opacity-50">No hay cursos disponibles</p>
            )}
        </section>
    );
}

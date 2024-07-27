import React, { useEffect } from "react";
import CoursesCard from "../components/CoursesCard";
import UseGetCourses from "../hooks/UseGetCourses";

export default function CoursesSection() {
    const { courses } = UseGetCourses();

    return (
        <section className="mt-[35px] grid grid-cols-[repeat(auto-fit,minmax(302.819px,1fr))] gap-4 w-full max-w-[150rem]">
            {courses ? (
                courses.map((course, index) => (
                    <CoursesCard title={course.name} image={course.imageUrl} key={index} />
                ))
            ) : (
                <p className="text-center text-white text-opacity-50">No hay cursos disponibles</p>
            )}
        </section>
    );
}

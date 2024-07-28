import React from "react";
import CoursesCard from "../components/CoursesCard";
import UseGetCourses from "../hooks/UseGetCourses";

export default function CoursesSection() {
    const { courses } = UseGetCourses();

    return (
        <section className="mt-[35px] grid grid-cols-[repeat(auto-fit,minmax(302.819px,1fr))] gap-4 w-full max-w-[150rem]">
            {courses ? (
                courses
                    .filter((course) => course.isDeleted === false)
                    .map((course, index) => (
                        <CoursesCard id={course.id} image={course.imageUrl} title={course.name} key={index} />
                    ))
            ) : (
                <p className="text-center text-white text-opacity-50">No hay cursos disponibles</p>
            )}
        </section>
    );
}

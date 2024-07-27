import React, { useEffect, useState } from "react";
import CoursesCard from "../components/CoursesCard";
import { getCoursesByUser } from "../api/api";
import UseAuth from "../../auth/context/UseAuth";
import UseGetCourses from "../hooks/UseGetCourses";

export default function CoursesSection() {
    const { courses } = UseGetCourses();

    return (
        <section className="mt-[35px] grid grid-cols-[repeat(auto-fit,minmax(302.819px,1fr))] gap-4 w-full max-w-[150rem]">
            {courses.map((course, index) => (
                <CoursesCard title={course.name} image={course.imageUrl} key={index} />
            ))}
        </section>
    );
}

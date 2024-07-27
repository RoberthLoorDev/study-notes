import React from "react";
import CoursesCard from "../components/CoursesCard";

export default function CoursesSection() {
    return (
        <section className="mt-[35px] grid grid-cols-[repeat(auto-fit,minmax(302.819px,1fr))] gap-4 w-full bg-red-500 max-w-[150rem]">
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
        </section>
    );
}

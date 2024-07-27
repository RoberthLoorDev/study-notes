import React from "react";

export default function CoursesCard({ title, image }) {
    return (
        <article className="h-40 flex flex-col rounded-lg bg-[#1B1B1D] cursor-pointer">
            <img className="h-20 object-cover rounded-lg" src={image} alt="" />
            <div className="px-4 flex flex-col justify-center h-full">
                <h3 className="text-white font-semibold">{title}</h3>
                <span className="text-sm text-white opacity-50 mt-2">25 notes</span>
            </div>
        </article>
    );
}

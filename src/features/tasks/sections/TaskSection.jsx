import React from "react";
import ButtonComponent from "../../common/components/ButtonComponent";
import TaskComponent from "../components/TaskComponent";

export default function TaskSection() {
    return (
        <div className="mt-[35px] grid grid-cols-[repeat(auto-fit,minmax(444px,1fr))] gap-5 w-full max-w-[150rem] mb-10">
            <TaskComponent />
            <TaskComponent />
            <TaskComponent />
            <TaskComponent />
            <TaskComponent />
            <TaskComponent />
            <TaskComponent />
        </div>
    );
}

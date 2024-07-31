export default function eventUpdateCoursesList() {
    // event that updates the courses

    const updateCoursesList = () => {
        const updateEvent = new CustomEvent("updateList", {
            detail: { message: "Lista de cursos actualizada" },
        });
        window.dispatchEvent(updateEvent);
    };

    return { updateCoursesList };
}

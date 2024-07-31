import { deleteCourse } from "../api/api";
import useToastNotification from "../../common/hooks/useToastNotification";
import eventUpdateCoursesList from "../events/eventUpdateCoursesList";

export default function useDeleteCourse() {
    const { showPromiseToast } = useToastNotification();
    const { updateCoursesList } = eventUpdateCoursesList();

    const deleteDocCourse = async (id) => {
        try {
            const handleDeleteCourse = async () => {
                await deleteCourse(id);
                updateCoursesList();
            };

            showPromiseToast(handleDeleteCourse(id), {
                loading: "Eliminando Curso",
                sucess: "Curso eliminado exitosamente",
                error: "Error al eliminar el curso",
            });

        } catch (error) {
            console.error(error);
        }
    };

    return { deleteDocCourse };
}

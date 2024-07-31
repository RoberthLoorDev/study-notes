import { deleteCourse } from "../api/api";
import useToastNotification from "../../common/hooks/useToastNotification";
import eventUpdateCoursesList from "../events/eventUpdateCoursesList";

export default function useDeleteCourse() {
    const { showPromiseToast, showErrorToast } = useToastNotification();
    const { updateCoursesList } = eventUpdateCoursesList();

    const deleteDocCourse = async (id) => {
        if (!id) {
            showErrorToast("No se encontró el curso seleccionado. Inténtelo de nuevo");
            return;
        }

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
            console.error("[useDeleteCourse]", error);
        }
    };

    return { deleteDocCourse };
}

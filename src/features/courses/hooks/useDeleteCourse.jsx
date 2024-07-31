import { deleteCourse } from "../api/api";
import useToastNotification from "../../common/hooks/useToastNotification";

export default function useDeleteCourse() {
    const { showPromiseToast } = useToastNotification();

    const deleteDocCourse = async (id) => {
        try {
            const handleDeleteCourse = async () => {
                await deleteCourse(id);
            };

            showPromiseToast(handleDeleteCourse(id), {
                loading: "Eliminando Curso",
                sucess: "Curso eliminado exitosamente",
                error: "Error al eliminar el curso",
            });

            const updateEvent = new Event("updateList");
            window.dispatchEvent(updateEvent);
        } catch (error) {
            console.error(error);
        }
    };

    return { deleteDocCourse };
}

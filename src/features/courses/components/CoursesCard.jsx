import React, { useState } from "react";
import ModalSection from "../sections/ModalSection";
import ButtonComponent from "../../common/components/ButtonComponent";
import { deleteCourse } from "../api/api";

export default function CoursesCard({ title, image, id }) {
    const [handleDeleteModal, setHandleDeleteModal] = useState(false);

    const openModal = () => setHandleDeleteModal(true);
    const closeModal = () => setHandleDeleteModal(false);

    const deleteDocCourse = async () => {
        await deleteCourse(id);
    };

    return (
        <article className="h-40 flex flex-col rounded-lg bg-[#1B1B1D] cursor-pointer">
            <img className="h-20 object-cover rounded-lg" src={image} alt="" />
            <div className="px-4 flex  justify-between items-center mt-4">
                <div className="flex flex-col">
                    <h3 className="text-white font-semibold">{title}</h3>
                    <span className="text-sm text-white opacity-50 mt-2">25 notes</span>
                </div>
                <img
                    src="/public/assets/image/delete-icon.png"
                    alt="delete card"
                    className="w-auto h-9 opacity-20 p-2 cursor-pointer hover:bg-[#FF000033] hover:scale-125 rounded-full duration-200 hover:opacity-100"
                    onClick={openModal}
                />
            </div>
            <ModalSection isOpen={handleDeleteModal} onClose={closeModal} height="230px">
                <h3 className="font-medium text-white">Delete subject</h3>
                <span className="text-white mt-[10px] text-sm">Are you sure to delete this note?</span>
                <br />
                <span className="text-white text-sm">{`"${title}"`}</span>
                <div className="flex mt-5 gap-3">
                    <ButtonComponent title="Cancel" onClick={closeModal} />
                    <ButtonComponent title="Delete" backgroundColor="#FF000020" onClick={deleteDocCourse} />
                </div>
            </ModalSection>
        </article>
    );
}

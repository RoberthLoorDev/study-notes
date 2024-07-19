import React, { useRef, useState } from "react";
import CoursesSection from "../sections/CoursesSection";
import ButtonComponent from "../../common/components/ButtonComponent";
import ModalSection from "../sections/ModalSection";

export default function CoursesPage() {
    //we use ref to point to the input image
    const inputRefImage = useRef(null);

    const focusInput = () => {
        if (inputRefImage.current) {
            inputRefImage.current.click();
        }
    };

    //control modal
    const [isModalOpen, setisModalOpen] = useState(false);

    const openModal = () => setisModalOpen(true);
    const closeModal = () => setisModalOpen(false);

    return (
        <main className="flex flex-col w-full h-full px-[196px] mt-[72px]">
            <div className="flex justify-between">
                <h2 className="text-[25px] uppercase text-[FFF] font-bold text-white">ALL COURSES</h2>

                <ButtonComponent width="149px" height="38px" title="Create course" onClick={openModal} />

                <ModalSection isOpen={isModalOpen} onClose={closeModal}>
                    <h3 className="font-medium text-white">Create subject</h3>
                    <input
                        type="email"
                        placeholder="Name of the subject"
                        className="w-full h-[38px] bg-[#19191B] border-[1px] border-[#343434] rounded-lg indent-3 text-sm outline-none text-white mt-3"
                    />

                    <input
                        className="mt-5 bg-[whirte] hidden"
                        type="file"
                        accept="image"
                        ref={inputRefImage}
                    />

                    <button
                        onClick={focusInput}
                        className="w-full flex flex-col items-center border-2 rounded-lg border-dashed border-[#343434] py-3 mt-3"
                    >
                        <img className="w-auto h-[50px]" src="/public/assets/image/upload-image.png" alt="" />
                        <span className="text-[#717171] text-sm">
                            <b>Click to upload</b> or drag and drop
                        </span>
                        <span className="text-[#717171] text-xs">Only images</span>
                    </button>

                    <ButtonComponent title="Create subject" margin="61px 0 0 0" />
                </ModalSection>
            </div>

            <CoursesSection />
        </main>
    );
}

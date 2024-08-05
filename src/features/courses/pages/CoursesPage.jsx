import React, { useRef, useState } from "react";
import ButtonComponent from "../../common/components/ButtonComponent";
import UseSaveCourses from "../hooks/UseSaveCourses";
import CoursesSection from "../sections/CoursesSection";
import ModalSection from "../../common/components/ModalComponent";
import TaskSection from "../../tasks/sections/TaskSection";

export default function CoursesPage() {
    //we use ref to point to the input image

    const { handleSaveCourse, setImage, setName, image } = UseSaveCourses();
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

                {/* Modal create course
                 */}
                <ModalSection isOpen={isModalOpen} onClose={closeModal}>
                    <h3 className="font-medium text-white">Create subject</h3>
                    <input
                        type="email"
                        placeholder="Name of the subject"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-[38px] bg-[#19191B] border-[1px] border-[#343434] rounded-lg indent-3 text-sm outline-none text-white mt-3"
                    />

                    <input
                        className="mt-5 bg-[whirte] hidden"
                        type="file"
                        accept="image"
                        ref={inputRefImage}
                        onChange={(e) => setImage(e.target.files[0])}
                    />

                    <button
                        onClick={focusInput}
                        className="w-full flex flex-col items-center border-2 rounded-lg  py-3 mt-3 relative"
                        style={image ? { borderColor: "#C3C3C" } : { border: "dashed", borderColor: "#343434" }}
                    >
                        <img className="w-auto h-[50px]" src="/public/assets/image/upload-image.png" alt="" />
                        <span className="text-[#717171] text-sm">
                            <b>Click to upload</b> or drag and drop
                        </span>
                        <span className="text-[#717171] text-xs">Only images</span>

                        {image ? (
                            <img
                                src="/public/assets/check.png"
                                alt=""
                                className="absolute w-6 h-6 -bottom-3 -right-3 animate-bounceIn"
                            />
                        ) : (
                            ""
                        )}
                    </button>

                    <div className="text-white text-xs mt-5 text-center underline opacity-85">
                        {image ? (
                            <span className="truncate">{image.name}</span>
                        ) : (
                            <span className="opacity-25">No hay imagen selccionada</span>
                        )}
                    </div>

                    <ButtonComponent title="Create subject" margin="30px 0 0 0" onClick={handleSaveCourse} />
                </ModalSection>
            </div>

            <CoursesSection />

            <section className="mt-10">
                <h2 className="text-[25px] uppercase text-[FFF] font-bold text-white">PENDING TASKS</h2>
                <div className="flex mt-3 justify-between">
                    <nav className="flex gap-1">
                        <button className="w-[150px] h-[40px] bg-[#353539] rounded-lg text-white">Pending</button>
                        <button className="w-[150px] h-[40px] bg-[#1D1D1F] rounded-lg text-white">In progress</button>
                        <button className="w-[150px] h-[40px] bg-[#1D1D1F] rounded-lg text-white">Finished</button>
                    </nav>

                    <button className="w-[150px] h-[40px] bg-[#353539] rounded-lg text-white">Create task</button>
                </div>

                <TaskSection />
            </section>
        </main>
    );
}

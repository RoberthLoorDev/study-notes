import React from "react";
import ReactDOM from "react-dom";
import UseAuth from "../../auth/context/UseAuth";

export default function ModalSection({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <section className="fixed w-full h-full bg-black top-0 left-0 z-50 bg-opacity-80 flex justify-center">
            <div className="w-[330px] max-h-[430px] h-[360px] flex flex-col justify-center px-[24px] bg-[#131315] mt-20 rounded-xl relative">
                <button
                    className="absolute top-0 right-0 text-white opacity-65 p-4 cursor-pointer"
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </section>,
        document.body
    );
}

import React from "react";
import ReactDOM from "react-dom";

export default function ModalSection({ isOpen, onClose, children, height = "360px", width = "330px" }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <section className="fixed w-full h-full bg-black top-0 left-0 z-50 bg-opacity-80 flex justify-center">
            <div
                className="max-h-[430px] flex flex-col justify-center px-[24px] bg-[#131315] mt-20 rounded-xl relative"
                style={{ height, width }}
            >
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

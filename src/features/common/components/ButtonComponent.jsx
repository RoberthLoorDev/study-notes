import React from "react";

export default function ButtonComponent({
    title = "Title",
    width = "100%",
    height = "38px",
    margin,
    type = "submit",
    textType = "primary",
    onClick,
    fontWeight = 400,
}) {
    const buttonType = {
        primary: "opacity-100",
        secondary: "opacity-30",
    };

    const textStyleButton = buttonType[textType];

    return (
        <button
            style={{ width, height, fontWeight, margin }}
            type={`${type}`}
            className={`rounded-[8px] bg-[#27272C] border-[1px] border-[#343434] text-white text-sm`}
            onClick={onClick}
        >
            <span className={`${textStyleButton}`}>{`${title}`}</span>
        </button>
    );
}

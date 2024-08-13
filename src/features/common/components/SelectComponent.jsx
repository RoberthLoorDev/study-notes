import React, { useState } from "react";

/**
 *
 * @param {Array} optionsArray
 * @returns
 */

export default function SelectComponent({ optionsArray }) {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [value, setValue] = useState(null);

    const handleMenu = () => setisOpenMenu(!isOpenMenu);
    const asignValue = (option) => {
        setValue(option);
        setisOpenMenu(false);
    };

    return (
        <div className="relative">
            <button
                className="w-full h-[38px] border-[1px] border-[#343434] rounded-lg text-start px-3 text-white flex justify-between items-center bg-[#343439] mt-[19px]"
                onClick={handleMenu}
            >
                <span className="text-sm"> {value ? value : "Choose a subject"} </span>
                <span className="rotate-90 flex">{">"}</span>
            </button>

            {/* Menu for select */}
            {isOpenMenu ? (
                <div className=" absolute bg-[#343439] max-h-[15rem] overflow-y-auto flex flex-col w-full z-30 text-white py-1 rounded-bl-lg -mt-1 text-sm">
                    {optionsArray.map((course) => {
                        <span
                            className="py-[9px]  w-full hover:bg-[#272729] indent-3 cursor-pointer"
                            onClick={(e) => {
                                asignValue(e.target.innerText);
                            }}
                        >
                            {course.name}
                        </span>;
                    })}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

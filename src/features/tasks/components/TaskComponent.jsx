import React from "react";

export default function TaskComponent() {
    return (
        <div>
            <article className="bg-[#242427] h-[180px] text-white p-[18px] rounded-lg flex flex-col justify-between border-[2px] border-[#343439]">
                <div className=" flex flex-col">
                    <h3 className="text-white font-semibold text-lg">Object-oriented programming</h3>
                    <p className="text-sm mt-1">
                        homework about the pillars of object-oriented programming. homework about the pillars of object-oriented
                        programming
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <span className="opacity-50">Delivery date: 2023 - 06-10</span>

                    <button className="bg-[#343439] flex w-[125px] p-2 justify-between items-center rounded-[5px]">
                        <span>To Start</span>
                        <span className="rotate-90">{">"}</span>
                    </button>
                </div>
            </article>
            <div className="flex items-center gap-2">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="mt-2">
                    <g filter="url(#filter0_d_15_196)">
                        {/* backgeound */}
                        <circle cx="8.5" cy="8.5" r="4.5" fill="#1E8D5F" />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_15_196"
                            x="0"
                            y="0"
                            width="17"
                            height="17"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.552941 0 0 0 0 0.372549 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_196" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_196" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <p className="mt-2 text-white text-opacity-50 italic text-xs">
                    You have 8 days and 20 hours left to submit this assignment.
                </p>
            </div>
        </div>
    );
}

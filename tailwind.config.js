/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                bounceIn: "bounceIn 1s ease-out forwards",
            },
            keyframes: {
                bounceIn: {
                    "0%, 100%": { transform: "scale(0.95)", opacity: "0" },
                    "50%": { transform: "scale(1.05)", opacity: "1" },
                    "75%": { transform: "scale(0.98)" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};

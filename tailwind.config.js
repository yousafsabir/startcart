/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            boxShadow: {
                card: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            },
            gridTemplateColumns: {
                card: "repeat(auto-fill, minmax(230px,1fr))",
            },
        },
    },
    plugins: [
        require("tw-elements/dist/plugin"),
        function ({ addVariant }) {
            addVariant("hover-submenu", "&:hover > ul");
        },
    ],
};

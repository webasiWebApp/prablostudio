/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF8C00", // Prablo Orange
                secondary: "#FFB347",
            },
            fontFamily: {
                // outfit: ["var(--font-outfit)", "sans-serif"],
                // "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
                // "pt-serif": ["var(--font-pt-serif)", "serif"],
                poppins: ["var(--font-poppins)", "sans-serif"],
                outfit: ["var(--font-poppins)", "sans-serif"],
                bebas: ["var(--font-bebas)", "sans-serif"],
            },
            animation: {
                scroll: "scroll 40s linear infinite",
            },
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};
import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary0: "#121212",
                primary20: "#282828",
                primary40: "#3f3f3f",
                primary60: "#575757",
                primary80: "#717171",
                primary100: "#8b8b8b",
                secondary0: "#ff9175",
                secondary20: "#ff9e84",
                secondary40: "#ffaa92",
                secondary60: "#ffb6a1",
                secondary80: "#ffc3b0",
                secondary100: "#ffcfc0"
            },
            fontFamily: {
                mono: ['var(--font-geist-mono)'],
                sans: ['var(--font-geist-sans)']
            }
        },
    },
    plugins: [],
} satisfies Config;

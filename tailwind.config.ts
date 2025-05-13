import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        bgHero: "url('/images/Hero.jpg')",
        "custom-linear":
          "linear-gradient(0deg, #283D6F 0%, #22345F 0%, #1D2D52 30.72%, #0F172A 100%)",
      },
      fontFamily: {
        heading: ["var(--font-alegreya-sc)", "serif"],
        subHeading: ["var(--font-roboto-mono)", "monospace"],
        body: ["var(--font-ibm-plex-mono)", "monospace"],
        button: ["var(--font-anonymous-pro)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

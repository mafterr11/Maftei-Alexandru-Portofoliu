/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1500px",
    },
    colors: {
      accent: "#796250",
      body: {
        DEFAULT: "#F3F6F9",
        light: "#EAE9E7",
        // toast: "#e5e5e5",
      },
      white: "#fff",
      black: {
        DEFAULT: "#0d0c0b",
        heavy: "#000000",
      },
      grey: {
        // DEFAULT: "#232323",
        light: "#ECECEC",
      },
      red: {
        DEFAULT: "#ED2939",
      },
    },
    extend: {
      boxShadow: {
        button: "2px 3px 3px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        work: "url('/project-bg-light.png')",
        contact: "url('/illustration-dark.svg')",
      },
      fontFamily: {
        roboto: [`var(--font-roboto)`, "sans-serif"],
        recursive: [`var(--font-recursive)`, "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

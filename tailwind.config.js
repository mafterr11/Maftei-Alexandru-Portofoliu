const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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

    extend: {
      colors: {
        accent: "#796250",
        body: {
          DEFAULT: "#fbfdff",
          light: "#EAE9E7",
        },
        white: "#fff",
        black: {
          DEFAULT: "#0d0c0b",
          heavy: "#000000",
        },
        grey: {
          light: "#ECECEC",
        },
        red: {
          DEFAULT: "#ED2939",
        },
      },
      height: {
        "screen-vh": "calc(var(--vh, 1vh) * 100)",
      },
      boxShadow: {
        button: "2px 3px 3px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        work: "url('/project-bg-light.png')",
        contact: "url('/illustration-dark.svg')",
        grainy: "url('/grainy-bg.webp')",
        softPaper: "url('/Background testimoniale.webp')",
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
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const colors = theme("colors");
  const flattenColors = (colorsObj, prefix = "") => {
    return Object.keys(colorsObj).reduce((acc, key) => {
      const value = colorsObj[key];
      const newKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === "string") {
        acc[newKey] = value;
      } else {
        Object.assign(acc, flattenColors(value, newKey));
      }
      return acc;
    }, {});
  };

  const allColors = flattenColors(colors);
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

const config = {
  plugins: {
    "@tailwindcss/postcss": {
                  darkMode: "class",
            theme: {
            extend: {
                colors: {
                "primary": "#eeb32b",
                "background-light": "#f8f7f6",
                "background-dark": "#221c10",
                },
                fontFamily: {
                "display": ["Be Vietnam Pro", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
                },
                borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
            },
            },
    },
  },
};



export default config;



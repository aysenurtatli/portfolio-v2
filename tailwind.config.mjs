/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '400': '400% 100%',
      },
      colors: {
       darkTheme: '#11001F',
      },
      fontFamily: {
        Roboto: ["Roboto"]
      },
      animation: {
        slide: 'slide 40s linear infinite',
        borderAnimation: "borderColorChange 3s infinite linear",
        'gradient-move': 'gradient-move 5s infinite linear',
        'light-glow': 'light-glow 5s infinite linear',
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)', 
          },
        },
        'light-glow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
       'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        contactColorChange: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        borderColorChange: {
          "0%": { borderColor: "#3b82f6" },
          "33%": { borderColor: "#ec4899" },
          "66%": { borderColor: "#facc15" }, 
          "100%": { borderColor: "#3b82f6" }, 
        },
        
      },

    },
  },
  plugins: [],
};

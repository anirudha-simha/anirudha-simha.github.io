/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}", // For files in root like App.tsx, index.tsx
    "./components/**/*.{js,ts,jsx,tsx}", // If a 'components' folder is added
    // Add other paths if you structure your project differently
  ],
  theme: {
    extend: {
      colors: {
        // Example: Add custom brand colors
        // 'brand-primary': '#007bff',
        // 'brand-secondary': '#6c757d',
      },
      fontFamily: {
        // Example: Add custom fonts
        // sans: ['Inter', 'sans-serif'],
      },
      animation: {
        // Example: Custom animations
        // 'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        // Example: Keyframes for custom animations
        // fadeIn: {
        //   '0%': { opacity: 0 },
        //   '100%': { opacity: 1 },
        // },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Example: if you need form styling enhancements
    // require('@tailwindcss/typography'), // Example: for prose styling
  ],
}

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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'sm': '640px', // الأجهزة الصغيرة
        'md': '768px', // الأجهزة المتوسطة
        'lg': '1024px', // الأجهزة الكبيرة
        'xl': '1280px', // الشاشات الكبيرة جدًا
      }
    },
  },
  plugins: [],
};

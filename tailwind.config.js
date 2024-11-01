// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',  // Indigo
        secondary: '#EF4444', // Red for Absent status
        success: '#10B981',   // Green for Present status
      },
    },
  },
  plugins: [],
};

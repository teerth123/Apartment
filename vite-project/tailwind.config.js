export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#facc15', // Bright yellow (keep as is)
          light: '#fde047',  // Softer yellow (keep as is)
          dark: '#ca8a04',   // Mustard yellow (keep as is)
        },
        secondary: {
          DEFAULT: '#0c3730', // Deep green (your provided color)
          light: '#1a534a',   // Lighter green
          dark: '#06201b',    // Darker green
        },
        accent: {
          DEFAULT: '#d4af37', // Metallic gold
          light: '#e5c76b',   // Soft gold
          dark: '#b8860b',    // Rich gold
        },
        background: {
          DEFAULT: '#f5f5f5', // Light off-white
          light: '#ffffff',   // Pure white
          dark: '#0c3730',    // Deep green for dark backgrounds
        },
        text: {
          DEFAULT: '#333333', // Dark gray for text
          light: '#666666',   // Light gray for secondary text
          dark: '#0c3730',    // Deep green for headings
        },
      },
      fontFamily: {
        sans: ['Playfair Display', 'Inter', 'system-ui', '-apple-system', 'sans-serif',  'serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 20px 30px -15px rgba(0, 0, 0, 0.1)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        glow: '0 0 15px rgba(234, 179, 8, 0.5)', // Rich yellow glow
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        slideIn: 'slideIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

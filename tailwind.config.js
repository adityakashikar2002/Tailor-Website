// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./src/**/*.{js,jsx,ts,tsx}",
// //   ],
// //   theme: {
// //     extend: {
// //       fontFamily: {
// //         poppins: ['Poppins', 'sans-serif'],
// //         inter: ['Inter', 'sans-serif'],
// //         montserrat: ['Montserrat', 'sans-serif'],
// //         'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
// //       },
// //       colors: {
// //         primary: '#b88b6f',
// //         secondary: '#0a142f',
// //         accent: '#be8a5a',
// //         light: '#f2e1db',
// //       },
// //       animation: {
// //         'spin-slow': 'spin 25s linear infinite',
// //         'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
// //         'slide-in-right': 'slideInRight 0.5s ease-out forwards',
// //         'slide-in-up': 'slideInUp 0.5s ease-out forwards',
// //         'fade-in': 'fadeIn 0.5s ease-out forwards',
// //         'breathe': 'breathe 1.5s ease-in-out infinite',
// //         'flip': 'flip 0.6s ease-out forwards',
// //       },
// //       keyframes: {
// //         slideInLeft: {
// //           '0%': { transform: 'translateX(-100%)', opacity: '0' },
// //           '100%': { transform: 'translateX(0)', opacity: '1' },
// //         },
// //         slideInRight: {
// //           '0%': { transform: 'translateX(100%)', opacity: '0' },
// //           '100%': { transform: 'translateX(0)', opacity: '1' },
// //         },
// //         slideInUp: {
// //           '0%': { transform: 'translateY(50px)', opacity: '0' },
// //           '100%': { transform: 'translateY(0)', opacity: '1' },
// //         },
// //         fadeIn: {
// //           '0%': { opacity: '0' },
// //           '100%': { opacity: '1' },
// //         },
// //         breathe: {
// //           '0%, 100%': { transform: 'scale(1)' },
// //           '50%': { transform: 'scale(1.05)' },
// //         },
// //         flip: {
// //           '0%': { transform: 'rotateY(0)' },
// //           '100%': { transform: 'rotateY(360deg)' },
// //         },
// //       },
// //     },
// //   },
// //   plugins: [],
// // }



// // tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         serif: ['"Cormorant Garamond"', 'serif'],
//       },
//       colors: {
//         amber: {
//           50: '#fffbeb',
//           100: '#fef3c7',
//           200: '#fde68a',
//           300: '#fcd34d',
//           400: '#fbbf24',
//           500: '#f59e0b',
//           600: '#d97706',
//           700: '#b45309',
//           800: '#92400e',
//           900: '#78350f',
//         },
//       },
//       animation: {
//         bounce: 'bounce 1.5s infinite',
//       },
//     },
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
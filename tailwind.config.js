import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            dropShadow: {
                glow: [
                  "0 0px 20px rgba(255,255, 255, 0.7)",
                  "0 0px 65px rgba(255, 255,255, 0.5)"
                ],
                image: [
                  "0 0px 20px rgba(255,255, 255, 0.6)",
                  "0 0px 65px rgba(255, 255,255, 0.3)"
                ],
                logo: [
                  "0 0px 20px rgba(255,255, 255, 0.5)",
                  "0 0px 65px rgba(255, 255,255, 0.3)"
                ]
              },
            colors: {
                customPurple: '#bd2ec7',
                customLightblue: '#03fcfc'
            },
            fontSize: {
              '0.5vw': '0.5vw',
              '1vw': '1vw',
              '1/2vw': '1.5vw',
              '2vw': '2vw',
              '3vw': '3vw',
              '4vw': '4vw',
              '5vw': '5vw',
              '6vw': '6vw',
              '0.25rem': '0.25rem',
              '0.5rem': '0.5rem',
              '0.75rem': '0.75rem',
              '1rem': '1rem',
              '1.25rem': '1.25rem',
              '1.5rem': '1.5rem',
              '2rem': '2rem',
              '2.5rem': '2.5rem',
              '3rem': '3rem',
              '3.5rem': '3.5rem',
              '4rem': '4rem',
              '5rem': '5rem',
              '6rem': '6rem',
            },
            margin: {
              '0.5rem': '0.5rem',
              '0.75rem': '0.75rem',
              '1rem': '1rem',
              '1.25rem': '1.25rem',
              '1.5rem': '1.5rem',
              '2rem': '2rem',
              '2.5rem': '2.5rem',
            },
            inset: {
              '33%': '33%',
            },
            keyframes: {
              marquee: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(-100%)' },
              },
            },
            animation: {
              marquee: 'marquee 15s linear infinite',
            },
        },
    },

    plugins: [forms],
};

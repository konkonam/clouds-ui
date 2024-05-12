const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    safelist: ['dark'],
    prefix: '',

    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            transitionProperty: {
                'left-right': 'left, right',
            },
            aria: {
                current: 'current="page"',
            },
            colors: {
                border: 'hsl(var(--border))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },

            },
            borderRadius: {
                xl: 'calc(var(--radius) + 4px)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
        safelist: [
            // Generate classes dynamically based on likely ids and actual property values used in animations
            ...Array.from({ length: 30 }, (_, i) => `particle-animation-${i + 1}`), // Considering you have 30 particles

            // Example on how you might deal with dynamically generated durations or other attributes, if they are limited to know set of possible values:
            ...Array.from({ length: 61 }, (v, i) => `duration-${(i + 40).toFixed(1)}s`), // Assuming durations between 40s to 100s every 1 second as specified in getStyle function

            // Include specific units if their usage is discretely known in advance (like widths and heights)
            ...Array.from({ length: 6 }, (v, i) => `w-${i + 5}px`),
            ...Array.from({ length: 6 }, (v, i) => `h-${i + 5}px`),
        ],
    },
    plugins: [animate],
}

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    experimental: {
        uniformColorPalette: true,
        extendedFontSizeScale: true,
        applyComplexClasses: true,
    },
    purge: {
        content: ['./src/index.html', './src/**/*.js'],
    },
    theme: {
        interFontFeatures: {
            default: ['calt', 'liga', 'kern'],
            numeric: ['tnum', 'salt', 'ss02'],
        },
        extend: {},
        screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }

            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
    },
    variants: {},
    plugins: [
        require('tailwindcss-font-inter')({
            importFontFace: true,
            disableUnusedFeatures: true,
        }),
    ],
};
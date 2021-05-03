module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
            'patricia-color': '#131313'
        },
        backgroundImage: theme => ({
            'patricia': "url('/images/patricia.svg')",
            'logo': "url('/images/logo.svg')",
        }),
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        fontSize: {
            'smallest': '.25rem',
            'smaller': '.35rem',
            'small': '.55rem',
        },
        height: {
            sm: '17rem',
        },
        zIndex: {
            '-1000': '-1000',
          }
      },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
}
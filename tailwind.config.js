module.exports = {
    content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'desktop-header': "url('../images/desktop/image-header.jpg')",
                'mobile-header': "url('../images/mobile/image-header.jpg')",
                'desktop-transform': "url('../images/desktop/image-transform.jpg')",
                'mobile-transform': "url('../images/mobile/image-transform.jpg')",
            },
            colors: {
                primary: {
                    red: 'hsl(7, 99%, 70%)',
                    yellow: 'hsl(51, 100%, 49%)',
                    cyan1: 'hsl(167, 40%, 24%)',
                    cyan2: 'hsl(168, 34%, 41%)',
                    blue: 'hsl(198, 62%, 26%)',
                },
                neutral: {
                    blue1: 'hsl(212, 27%, 19%)',
                    blue2: 'hsl(213, 9%, 39%)',
                    blue3: 'hsl(232, 10%, 55%)',
                    blue4: 'hsl(210, 4%, 67%)',
                },
            },
            fontFamily: {
                sans: ['Barlow', 'sans-serif'],
                serif: ['Fraunces', 'serif'],
            },
        },
    },
    plugins: [],
};

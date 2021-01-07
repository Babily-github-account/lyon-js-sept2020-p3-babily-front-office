const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['public/images/*.{jpg,png}'], {
  destination: `public/images/converted/`,
  plugins: [
    imageminWebp({
      quality: 75,
      resize: {
        width: 1000,
        height: 0,
      },
    }),
  ],
}).then(() => {
  console.log('Images optimized');
});

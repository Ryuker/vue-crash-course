# Project Notes

# 01. Setup
- copied over content from 02_composition-api and cleaned it up as starting point

## Setting Up Tailwind
- [setup instructions](https://tailwindcss.com/docs/guides/vite#vue)
``` shell 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- specified content key in tailwind.config.js
``` js tailwind.config.js
content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
```
- Added `src/style.css`
- Imported style into main.js | `import './style.css';`

## Configured theme
- specified `Poppins` as font to use
- added a utility class to gridTemplateColumns
```js tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    gridTemplateColumns: {
      '70/30': '70% 28%'
    }
  },
},
```

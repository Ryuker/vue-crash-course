# 3. Examples in composition API notes
- uses node v20.16.0 (use NVM 20)

# 01. Setup
- specify the folder name at the end of the install command 
``` shell
npm create vue@latest 02_vue-crash-2024
```
- run `npm i` to install the dependencies


left vid at: 22:15 - [vid](https://www.youtube.com/watch?v=VeNfHj6MhgA&t=1334s)

## Basic mounting setup (already included in project scaffold)
```js src/main.js
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```
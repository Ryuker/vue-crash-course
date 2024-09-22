# 2. Introduction using the CDN import and options api


# 01. Using the CDN
- We can import Vue from the CDN 
  - this way we can only use the options API though

## How Vue works
- Like in React we add a div with and id of app
- We can then target this div using the mount method on an app object.
  - so we declare `const app = Vue.createApp({ - options go here })`
  - and then we run `app.mount('#app');`

## Most basic example:
- renders a message on the page
``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <title>Vue Test</title>
</head>
<body>
  <div id="app">{{message}}</div>
    
  <script>
    const app = Vue.createApp({
      data() {
        return {
          message: 'Hello from Vue!'
        }
      }
    });

    app.mount('#app')
  </script>
  
</body>
</html>
```
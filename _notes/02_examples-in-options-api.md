# 2. Introduction using the CDN import and options api


# 01. Using the CDN
- We can import Vue from the CDN 
  - this way we can only use the options API though

## How Vue works
- Like in React we add a div with and id of app
- We can then target this div using the mount method on an app object.
  - so we declare `const app = Vue.createApp({ - options go here })`
  - and then we run `app.mount('#app');`
  - inside the app we specify options in an object
    - we can specify data using `data() {}` - data is a function

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


## Method example
 - we can specify methods using `methods:` - methods is an object
      - inside methods we specify functions like normal.

## Button exampple
  - `<button @click="clickMe">Click Me</button>`
    - we use the @ symbol to specify a callback to a method in the app, in this case 'clickMe'
    - we then declare and populate the method under `methods:` in the script tag
``` HTML
methods: {
  clickMe() {
    console.log('Button clicked');
  }
}
```

``` HTML
<div id="app">
  <h1>{{message}}</h1>
  <button @click="clickMe">Click Me</button>
</div>
  
<script>
  const app = Vue.createApp({
    data() {
      return {
        message: 'Hello from Vue!'
      }
    },

    methods: {
      clickMe() {
        console.log('Button clicked');
      }
    }
  });

  app.mount('#app')
</script>
```
# i18n-example
Simple i18n Example.

![CodeQL](https://github.com/ulisses-cruz/i18n-example/workflows/CodeQL/badge.svg?branch=master)

This repo provides a simple code example of how to use the [i18n](https://github.com/mashpie/i18n-node) library.

## How to setup

* __installation__:
  * `yarn add i18n cookie-parser`
  * `npm i i18n cookie-parser`

* __configuration__: (we are using express in the example)

  ```
  const express = require('express');
  const cookieParser = require('cookie-parser');
  const i18n = require('i18n');
  
  const app = express();
  app.use(cookieParser());
  
  // simple i18n configuration
  i18n.configure({
    locales: ['pt', 'en'],             // the first locale in the array will be the default,
                                       // 'pt' in this case
    cookie: 'locale',                  // the cookie that will be search for to set the 
                                       // current locale
    directory: __dirname + 'locales',
  })
  app.use(i18n.init)                   // this middleware will set the i18n methods in the 
                                       // request/response objects, it will also check for
                                       // the accept-language header, the lang query parameter
                                       // and the cookie ('locale' in this case) to see what 
                                       // is the current locale to use
  ```
* __locales directory structure__:
  
  ```
  locales/
    pt.json
    en.json
  ```
* __locale file format__:

  _pt.json_
  ```
  {
    "language": "Português",
  }
  ```
  _en.json_
  ```
  {
    "language": "English"
  }
  ```
  
* __changing current locale__:

  To change the current locale you just need to make a request with the new cookie, header or query:
  ```
  <!-- using hbs template as example -->
  <button id='lang-switch'>{{__ "language"}}</button>
  <script>
  document.getElementById('lang-switch').addEventListener('click', () => {
    const cookie = document.cookie;
    switch(cookie) {
      case 'locale=en':
        document.cookie = 'locale=pt';
        break;
      default:
        document.cookie = 'locale=en';
    }
    document.location.reload(); // this will reload the page with the new cookie
  })
  </script>
  ```

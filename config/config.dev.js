const path = require('node:path');
const process = require("node:process");

const config ={
  "webpack": {
    "mode": "development",
    "devServer": {
      "proxy": [
        {
          context: ['/user'],
          target: 'http://localhost:8080',
        },
      ]
    }
  }
}

module.exports = config;
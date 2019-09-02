module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "key-spacing"          : 0,
      "jsx-quotes"           : [2, "prefer-single"],
      "object-curly-spacing" : [2, "always"],
      "react/prop-types": 2
    }
};

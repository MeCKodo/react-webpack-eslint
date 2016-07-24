module.exports = {
    "extends": ["airbnb"],
    "parser": "babel-eslint",
    "globals" : {
      "__DEV__":true
    },
    "plugins": [
        "react"
    ],
    "rules" : {
        "indent": [2, "tab"],
        "react/jsx-indent": [2, "tab"],
    }
};
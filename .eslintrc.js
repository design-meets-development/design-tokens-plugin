module.exports = {
    "env": {
        "es6": true,
        "commonjs": true
    },
    "extends": [
        "eslint:recommended",
        "sketch"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "globals": {
        "console": false,
        "context": false,
        "COSAlertWindow": false,
        "NSFileHandlingPanelOKButton": false
    },
    "rules": {
    }
};
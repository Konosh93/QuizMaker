module.exports = {
    "extends": "airbnb",
    "parserOptions":{
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        },
    },
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [2, { extensions: ['.js','.jsx'] }],
        "no-console": "off",
        "func-names": [0],
        "new-cap": [2, { newIsCap: true ,capIsNew: true, capIsNewExceptions: ['List', 'Map']}],
        "linebreak-style": [0]
    },
    "env": {
        "browser": true
    }
};
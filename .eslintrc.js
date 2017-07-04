module.exports = {
    "extends": ["eslint:recommended", "google"],
    "parserOptions": { 
    	"ecmaVersion": 6,
    	"sourceType": "module"
    },
    "env": {
        "browser": true,
        "mocha": true
    },
    "globals": {
        "expect": true,
        "inject": true
    },
    "rules": {
    	// override
    	"comma-dangle": 0,
    	"require-jsdoc": 0
  	}
};
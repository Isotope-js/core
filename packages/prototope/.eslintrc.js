require("eslint-config-xtrict/patch-eslint6");

module.exports = {
	parserOptions: {
		tsconfigRootDir: __dirname
	},
	env: { browser: true, es6: true, jest: true },
	root: true,
	extends: ["xtrict"],
	rules: {
		"unicorn/prefer-node-append": "off",
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
		"@typescript-eslint/generic-type-naming": [2, "^[A-Z][0-9]?$"]
	}
};

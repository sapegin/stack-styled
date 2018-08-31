const path = require('path');

module.exports = {
	title: 'Stack Styled: stacking layouts for React',
	sections: [
		{
			content: path.join(__dirname, 'styleguide/Intro.md'),
		},
		{
			components: 'src/[A-Z]*.js',
		},
	],
	require: [path.join(__dirname, 'styleguide/styleguide.js')],
	getComponentPathLine: () => `import Stack from 'stack-styled'`,
	ribbon: {
		url: 'https://github.com/sapegin/stack-styled',
	},
	usageMode: 'expand',
	showSidebar: false,
	styleguideDir: path.join(__dirname, 'styleguide-build'),
};

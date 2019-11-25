const path = require('path');
const docgenTypeScript = require('react-docgen-typescript');

module.exports = {
	title: 'Stack Styled: stacking layouts for React',
	sections: [
		{
			content: path.join(__dirname, 'styleguide/Intro.md'),
		},
		{
			components: 'src/*.tsx',
		},
	],
	require: [path.join(__dirname, 'styleguide/styleguide.tsx')],
	getComponentPathLine: () => `import Stack from 'stack-styled'`,
	ribbon: {
		url: 'https://github.com/sapegin/stack-styled',
	},
	showSidebar: false,
	styleguideDir: path.join(__dirname, 'styleguide-build'),
	propsParser: docgenTypeScript.withCustomConfig(
		path.join(__dirname, 'tsconfig.json'),
		{
			propFilter(prop) {
				if (prop.parent) {
					return (
						!prop.parent.fileName.includes('node_modules') ||
						prop.parent.fileName.includes('@types/styled-system')
					);
				}
				return true;
			},
			componentNameResolver: (exp, source) =>
				exp.getName() === 'StyledComponentClass' &&
				docgenTypeScript.getDefaultExportForFile(source),
		}
	).parse,
};

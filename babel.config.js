module.exports = {
	presets: [
		[
			'@babel/env',
			{
				modules: false,
			},
		],
		'@babel/react',
	],
	plugins: ['babel-plugin-styled-components'],
	env: {
		test: {
			presets: ['@babel/env', '@babel/react'],
		},
		cjs: {
			presets: [
				[
					'@babel/env',
					{
						targets: {
							node: '8.6',
						},
					},
				],
			],
		},
		emotion: {
			plugins: [
				[
					'transform-rename-import',
					{
						original: '^styled-components$',
						replacement: '@emotion/styled',
					},
				],
			],
		},
	},
};

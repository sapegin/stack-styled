module.exports = {
	presets: [
		[
			'@babel/env',
			{
				modules: false,
				useBuiltIns: 'usage',
				shippedProposals: true,
			},
		],
	],
	env: {
		test: {
			presets: [
				[
					'@babel/env',
					{
						targets: { node: 6 },
						useBuiltIns: 'usage',
						shippedProposals: true,
					},
				],
				'@babel/react',
			],
		},
	},
};

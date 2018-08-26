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
						target: { node: 6 },
						useBuiltIns: 'usage',
						shippedProposals: true,
					},
				],
				'@babel/react',
			],
		},
	},
};

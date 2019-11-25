module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|tsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};

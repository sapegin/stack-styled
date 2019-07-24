import styled from 'styled-components';
import { space, layout, flexbox, grid, system } from 'styled-system';
import propTypes, { propType } from '@styled-system/prop-types';

const px = value => (typeof value === 'number' ? `${value}px` : value);

const getMinMaxValue = (value, scale = []) => px(scale[value] || value);

const Stack = styled('div')(
	{
		boxSizing: 'border-box',
		display: 'grid',
	},
	space,
	layout,
	flexbox,
	grid,
	system({
		minColumnWidth: {
			property: 'gridTemplateColumns',
			scale: 'space',
			transform: (value, scale) =>
				value
					? `repeat(auto-fit, minmax(${getMinMaxValue(value, scale)}, 1fr))`
					: null,
		},
	})
);

Stack.displayName = 'Stack';

Stack.propTypes = {
	gap: propType,
	minWidth: propType,
	...propTypes.space,
	...propTypes.layout,
	...propTypes.flexbox,
	...propTypes.grid,
};

/** @component */
export default Stack;

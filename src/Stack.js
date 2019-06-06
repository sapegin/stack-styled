import styled from 'styled-components';
import { space, layout, flexbox, grid, system } from 'styled-system';
import propTypes, { propType } from '@styled-system/prop-types';

const DEFAULT_SCALE = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const getPx = value => (typeof value === 'number' ? `${value}px` : value);

/**
 * @visibleName Stack Styled
 */
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
		gap: {
			property: 'gridGap',
			scale: 'space',
			defaultScale: DEFAULT_SCALE,
		},
		minWidth: {
			property: 'gridTemplateColumns',
			transform: n => (n ? `repeat(auto-fit, minmax(${getPx(n)}, 1fr))` : null),
		},
	})
);

Stack.displayName = 'Stack';

Stack.defaultProps = {
	gap: 2,
};

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

import system from '@rebass/components';
import { style, util } from 'styled-system';
import PropTypes from 'prop-types';

const DEFAULT_SCALE = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const gap = style({
	prop: 'gap',
	cssProperty: 'gridGap',
	key: 'space',
	transformValue: util.px,
	scale: DEFAULT_SCALE,
});

const minWidth = style({
	prop: 'minWidth',
	cssProperty: 'gridTemplateColumns',
	transformValue: n =>
		n ? `repeat(auto-fit, minmax(${util.px(n)}, 1fr))` : null,
});

/**
 * @visibleName Stack Styled
 */
const Stack = system(
	{
		gap: 2,
		blacklist: ['gap', 'minWidth'],
	},
	{
		boxSizing: 'border-box',
		display: 'grid',
	},
	gap,
	minWidth,
	'width',
	'space',
	'alignContent',
	'alignItems',
	'justifyContent',
	'gridGap',
	'gridRowGap',
	'gridColumnGap',
	'gridColumn',
	'gridRow',
	'gridAutoFlow',
	'gridAutoRows',
	'gridAutoColumns',
	'gridTemplateRows',
	'gridTemplateColumns'
);

Stack.displayName = 'Stack';

Stack.propTypes = {
	is: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	...gap.propTypes,
	...minWidth.propTypes,
};

/** @component */
export default Stack;

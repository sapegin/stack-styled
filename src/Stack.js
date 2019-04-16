import styled from 'styled-components';
import {
	width,
	space,
	alignContent,
	alignItems,
	justifyContent,
	gridGap,
	gridRowGap,
	gridColumnGap,
	gridColumn,
	gridRow,
	gridAutoFlow,
	gridAutoRows,
	gridAutoColumns,
	gridTemplateRows,
	gridTemplateColumns,
	style,
	getPx,
} from 'styled-system';

const DEFAULT_SCALE = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const gap = style({
	prop: 'gap',
	cssProperty: 'gridGap',
	key: 'space',
	transformValue: getPx,
	scale: DEFAULT_SCALE,
});

const minWidth = style({
	prop: 'minWidth',
	cssProperty: 'gridTemplateColumns',
	transformValue: n =>
		n ? `repeat(auto-fit, minmax(${getPx(n)}, 1fr))` : null,
});

/**
 * @visibleName Stack Styled
 */
const Stack = styled('div')(
	{
		boxSizing: 'border-box',
		display: 'grid',
	},
	gap,
	minWidth,
	width,
	space,
	alignContent,
	alignItems,
	justifyContent,
	gridGap,
	gridRowGap,
	gridColumnGap,
	gridColumn,
	gridRow,
	gridAutoFlow,
	gridAutoRows,
	gridAutoColumns,
	gridTemplateRows,
	gridTemplateColumns
);

Stack.displayName = 'Stack';

Stack.defaultProps = {
	gap: 2,
};

Stack.propTypes = {
	...gap.propTypes,
	...minWidth.propTypes,
	...width.propTypes,
	...space.propTypes,
	...alignContent.propTypes,
	...alignItems.propTypes,
	...justifyContent.propTypes,
	...gridGap.propTypes,
	...gridRowGap.propTypes,
	...gridColumnGap.propTypes,
	...gridColumn.propTypes,
	...gridRow.propTypes,
	...gridAutoFlow.propTypes,
	...gridAutoRows.propTypes,
	...gridAutoColumns.propTypes,
	...gridTemplateRows.propTypes,
	...gridTemplateColumns.propTypes,
};

/** @component */
export default Stack;

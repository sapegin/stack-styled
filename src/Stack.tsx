import styled from 'styled-components';
import {
	space,
	layout,
	flexbox,
	grid,
	color,
	border,
	shadow,
	position,
	system,
	SpaceProps,
	LayoutProps,
	FlexboxProps,
	GridProps,
	ColorProps,
	BorderProps,
	ShadowProps,
	PositionProps,
	ResponsiveValue,
	TLengthStyledSystem,
} from 'styled-system';
// @ts-ignore
import propTypes, { propType } from '@styled-system/prop-types';

type Props = SpaceProps &
	LayoutProps &
	FlexboxProps &
	GridProps &
	ColorProps &
	BorderProps &
	ShadowProps &
	PositionProps & {
		/** Minimum width of a child, will create responsive CSS Grid layout like
		 * `grid-template-columns: repeat(auto-fit, minmax($minColumnWidth$)}, 1fr))`.
		 * (You can use either this prop or `numColumns` but not both.)
		 */
		minColumnWidth?: ResponsiveValue<TLengthStyledSystem>;
		/** Number of columns, will create a responsive CSS Grid layout like
		 * `grid-template-columns: repeat($numColumns$, 1fr))`.
		 * (You can use either this prop or `minColumnWidth` but not both.)
		 */
		numColumns?: ResponsiveValue<number>;
	};

const px = (value: TLengthStyledSystem): string =>
	typeof value === 'number' ? `${value}px` : value;

const getMinMaxValue = (
	value: TLengthStyledSystem,
	scale: TLengthStyledSystem[] = []
) => px(scale[value as number] || value);

export const Stack = styled('div')<Props>(
	{
		boxSizing: 'border-box',
		display: 'grid',
	},
	space,
	layout,
	flexbox,
	grid,
	color,
	border,
	shadow,
	position,
	system({
		minColumnWidth: {
			property: 'gridTemplateColumns',
			scale: 'space',
			transform: (value, scale) =>
				value
					? `repeat(auto-fit, minmax(${getMinMaxValue(
							value,
							scale as TLengthStyledSystem[]
					  )}, 1fr))`
					: null,
		},
		numColumns: {
			property: 'gridTemplateColumns',
			transform: value => (value ? `repeat(${value}, 1fr)` : null),
		},
	})
);

Stack.displayName = 'Stack';

Stack.propTypes = {
	minColumnWidth: propType,
	...propTypes.space,
	...propTypes.layout,
	...propTypes.flexbox,
	...propTypes.grid,
	...propTypes.color,
	...propTypes.border,
	...propTypes.shadow,
	...propTypes.position,
};

export default Stack;

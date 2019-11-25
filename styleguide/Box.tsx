import styled from 'styled-components';
import { width, height, space, color } from 'styled-system';

const Box = styled('div')(
	{
		boxSizing: 'border-box',
	},
	width,
	height,
	space,
	color
);

export default Box;

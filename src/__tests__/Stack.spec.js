import 'jest-styled-components';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Stack from '../Stack';

afterEach(cleanup);

test('render a div by default', () => {
	const {
		container: { firstChild },
	} = render(<Stack>hello</Stack>);
	expect(firstChild).toMatchSnapshot();
});

test('render a custom tag', () => {
	const { getByTestId } = render(
		<Stack is="header" data-testid="container">
			hello
		</Stack>
	);
	expect(getByTestId('container')).toHaveProperty('tagName', 'HEADER');
});

test('custom gap', () => {
	const {
		container: { firstChild },
	} = render(<Stack gap={4}>hello</Stack>);
	expect(firstChild).toHaveStyleRule('grid-gap', '32px');
});

test('custom min width', () => {
	const {
		container: { firstChild },
	} = render(<Stack minWidth={100}>hello</Stack>);
	expect(firstChild).toHaveStyleRule(
		'grid-template-columns',
		'repeat(auto-fit,minmax(100px,1fr))'
	);
});

test('spacing props', () => {
	const {
		container: { firstChild },
	} = render(
		<Stack mt={4} pb={5}>
			hello
		</Stack>
	);
	expect(firstChild).toHaveStyleRule('margin-top', '32px');
	expect(firstChild).toHaveStyleRule('padding-bottom', '64px');
});

test('CSS grip props', () => {
	const {
		container: { firstChild },
	} = render(
		<Stack gridTemplateColumns="1fr 2fr 1fr" alignItems="center">
			hello
		</Stack>
	);
	expect(firstChild).toHaveStyleRule('grid-template-columns', '1fr 2fr 1fr');
	expect(firstChild).toHaveStyleRule('align-items', 'center');
});

// https://github.com/jxnblk/styled-system/pull/274
test.skip('doesn’t leak props to DOM', () => {
	const {
		container: { firstChild },
	} = render(<Stack gap={5} minWidth={100} m={2} alignItems="center" />);
	expect(firstChild.outerHTML).toMatchSnapshot();
});

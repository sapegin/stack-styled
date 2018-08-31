import styled from 'styled-components';

const Button = styled.button`
	padding: 8px 16px;
	border: 0;
	border-radius: 2px;
	background: salmon;
	color: white;
	font-size: 1rem;
	cursor: pointer;

	&:hover,
	&:active,
	&:focus {
		background: tomato;
	}
`;

export default Button;

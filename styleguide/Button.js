import styled from 'styled-components';

const Button = styled.button`
	padding: 8px 16px;
	border: 0;
	border-radius: 2px;
	background: #cd009b;
	color: white;
	font-size: 1rem;
	cursor: pointer;

	&:hover,
	&:active,
	&:focus {
		background: #f249cc;
	}
`;

export default Button;

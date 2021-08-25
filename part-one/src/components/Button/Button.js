import React from 'react';
import P from 'prop-types';
import { StyledButton } from './styled';

const Button = ({ disabled, text, onClick }) => (
	<StyledButton disabled={disabled} onClick={onClick}>
		{text}
	</StyledButton>
);

Button.prototypes = {
	disabled: P.bool,
	text: P.string.isRequired,
	onClick: P.func.isRequired,
};

Button.defaultProps = {
	disabled: false,
};

export default Button;

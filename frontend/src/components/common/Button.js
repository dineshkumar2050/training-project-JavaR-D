import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Button({ wrapperClassName='',style={},buttonClassName='bg-primary px-4 py-2',text,handleClick,...rest }) {
    return (
        <Wrapper className={wrapperClassName}>
            <StyledButton style={style} className={buttonClassName} onClick={handleClick}>
                {text}
            </StyledButton>
        </Wrapper>
    )
}

const StyledButton = styled.button`
    color: #fff;
    border: none;
    border-radius: 4px;
`;

const Wrapper = styled.div``;

Button.propTypes = {
    wrapperClassName: PropTypes.string,
    style: PropTypes.object,
    buttonClassName: PropTypes.string,
    text: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button

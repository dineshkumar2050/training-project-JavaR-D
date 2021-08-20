import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function SelectField({ handleChange, options, id, name, wrapperClassName='', className='', labelClassName='', labelFor='', style={}, labelStyle={}, ...rest }) {
    return (
        <Wrapper className={wrapperClassName}>
            <Label className={labelClassName} style={labelStyle} htmlFor={labelFor}>Choose a car:</Label>
            <Select className={className} style={style} onChange={handleChange} name={name} id={id}>
                {
                    options && options.length > 0 &&
                    options.map(option => {
                        return(
                            <Option value={option}>{option}</Option>
                        )
                    })
                }
            </Select>
        </Wrapper>
    )
}

const Wrapper = styled.div``;

const Label = styled.label``;

const Select = styled.select`
    border: 1px solid #000;
    border-radius: 3px;
    padding: 5px 15px;
`;

const Option = styled.option``;

SelectField.propTypes = {

}

export default SelectField

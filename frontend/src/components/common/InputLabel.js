import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function InputLabel({ labelStyle={}, labelClassName='', labelText, ...props}) {
    return (
        <Label style={labelStyle} className={labelClassName}>
            { labelText }
        </Label>
    )
}

const Label = styled.div``

InputLabel.propTypes = {
    labelStyle: PropTypes.object,
    labelClassName: PropTypes.string,
    labelText: PropTypes.string
}

export default InputLabel

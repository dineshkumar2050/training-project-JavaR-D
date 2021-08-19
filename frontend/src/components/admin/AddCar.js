import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import SelectField from '../common/SelectField'
import BodyWrapper from '../common/BodyWrapper'

function AddCar(props) {
    const [formData, setFormData] = useState({  })
    return (
        <BodyWrapper>
            <SelectField
                name={''}
            />
        </BodyWrapper>
    )
}

AddCar.propTypes = {

}

export default AddCar


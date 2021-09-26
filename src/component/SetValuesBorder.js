import React, { useState } from 'react'

export const SetValuesBorder = (id) => {

    const [values, setValues] = useState([])

    const handleInputChange = (e) => {
        setValues([...values, {
            id: id.id,
            value: e.target.value
        }])   
    }

    return (
        <input
            type="text"
            onChange = {handleInputChange}
        />
    )
}

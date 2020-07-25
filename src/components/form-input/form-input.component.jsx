import React from 'react'
import {FormInputContainer, FormInputField, FormInputLabel} from "./form-input.styles";

const FormInput = ({handleChange, label, ...otherProps}) => (
  <FormInputContainer>
    <FormInputField onChange={handleChange} {...otherProps} />
    {
      label ? <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel> : null
    }
  </FormInputContainer>
)

export default FormInput

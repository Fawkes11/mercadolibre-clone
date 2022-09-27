import React from 'react'
import { Formik, Field, Form } from 'formik'
import { FormControl, FormErrorMessage, FormLabel, Input, Button } from '@chakra-ui/react'

const InputFieldWrapper = ({
    name,
    label,
    ...otherProps
}) => {

    return (

        <>
            <Field name={name}>
                {({ field, meta, form }) =>
                (
                    <FormControl as="fieldset" isInvalid={meta.touched && meta.error} >
                        <FormLabel  as="legend" fontSize="sm" fontWeight="normal">{label}</FormLabel>
                        <Input {...field} {...otherProps} />
                        <FormErrorMessage>{form.errors[`${name}`]}</FormErrorMessage>
                    </FormControl>
                )
                }
            </Field>
        </>
    )
}

export default InputFieldWrapper


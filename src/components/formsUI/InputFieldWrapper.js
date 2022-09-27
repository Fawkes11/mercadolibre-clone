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
                    <FormControl isInvalid={meta.touched && meta.error}>
                        <FormLabel>{label}</FormLabel>
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


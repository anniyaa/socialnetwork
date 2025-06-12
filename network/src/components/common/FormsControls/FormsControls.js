import React from "react";
import './FormControls.scss'

export const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`form-control ${hasError ? 'error' : ''}`}>
            {props.children}
            {hasError && <span className="error-message">{meta.error}</span>}
        </div>
    )
}

export const TextArea = ({ input, meta, ...props }) => {
    return <FormControl input={input} meta={meta} {...props}><textarea  {...input} {...props} /></FormControl>
}

export const Input = ({ input, meta, ...props }) => {
    return <FormControl input={input} meta={meta} {...props}><input {...input} {...props} /></FormControl>
}
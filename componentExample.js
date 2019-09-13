import React from 'react';
import styles from './componentExample.module.scss';
import useFormValidation from "./useFormValidation";
import validateExample from "./validateExample";

// great package for conditional classnames
// need for dealing with error vs regular state
// https://www.npmjs.com/package/classnames
import classNames from 'classnames/bind';

const componentExample = () => {

    const INITIAL_STATE = {
        name: "",
        email: "",
        phoneNumber: "",
        dateOfBirthYear: ""
    }

    const submitFunction = async () => {
        const { name, email, phoneNumber, dateOfBirthYear } = values
        // here is where you would call something like an api
        // call your backend and post the form data

    }

    // call the hook
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateExample, submitFunction);

    const { container, contentContainer, input, errorText, errorInput } = styles;
    return (
        <div className={container}>
            <form onSubmit={handleSubmit}>
                <div className={contentContainer}>
                    <div>
                        Form is below
                    </div>
                    {/* if there is an error render error text */}
                    {errors.name && <p className={errorText}>*{errors.name}</p>}
                    {/* if there is an error make the input field use errorInput styling */}
                    <input
                        className={classNames(errors.name && errorInput, input)}
                        name="name"
                        placeholder="Name"
                        type="text"
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                    />
                    {errors.email && <p className={errorText}>*{errors.email}</p>}
                    <input
                        className={classNames(errors.email && errorInput, input)}
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {errors.phoneNumber && <p className={errorText}>*{errors.phoneNumber}</p>}
                    <input
                        className={classNames(errors.phoneNumber && errorInput, input)}
                        name="phoneNumber"
                        placeholder="Phone Number"
                        type="number"
                        onChange={handleChange}
                        value={values.phoneNumber}
                        onBlur={handleBlur}
                    />
                    {errors.dateOfBirthYear && <p className={errorText}>*{errors.dateOfBirthYear}</p>}
                    <input
                        className={classNames(errors.dateOfBirthYear && errorInput, input)}
                        name="dateOfBirthYear"
                        placeholder="YYYY"
                        type="number"
                        onChange={handleChange}
                        value={values.dateOfBirthYear}
                        onBlur={handleBlur}
                    />
                    <button
                        disabled={isSubmitting}
                        type="submit">
                        Submit
                        </button>
                </div>
            </form>
        </div>
    )
}

export default componentExample;

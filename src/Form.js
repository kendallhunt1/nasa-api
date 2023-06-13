import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="longitude" name="longitude" ref={register({ required: "Must put in longitude", minLength: {value: 3, message: "Please use at least three characters"} })}/>
            {errors.longitude && <p>{errors.longitude.message}</p>}
            <input type="text" placeholder="latitude" name="latitude" ref={register({ required: "Must put in longitude", minLength: {value: 3, message: "Please use at least three characters"} })}/>
            {errors.latitude && <p>{errors.latitude.message}</p>}
            <input type="submit" />
        </form>
    )
}

export default Form;
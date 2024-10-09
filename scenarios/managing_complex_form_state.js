/*
Question: You are creating a form that collects user information such as name, email, and address. 
How would you manage the form state in a scalable way?

Answer:
    * Use useState or useReducer to manage the form state.
    * For larger forms, useReducer can be more scalable and easier to maintain by centralizing the state updates.

*/

import React, { useReducer } from 'react';

const formReducer = (state, action) => {
    return {
        ...state,
        [action.field]: action.value
    };
};

const UserForm = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        name: '',
        email: '',
        address: ''
    });

    const handleChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formState.name} onChange={handleChange} />
            <input name="email" value={formState.email} onChange={handleChange} />
            <input name="address" value={formState.address} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    name: '',
    surname: '',
    age: 0,
    email: '',
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('EDIT_NAME', (state, action) => {
            return {...state, name: action.payload};
        })
        .addCase('EDIT_SURNAME', (state, action) => {
            return {...state, surname: action.payload};
        })
        .addCase('EDIT_AGE', (state, action) => {
            return {...state, age: action.payload};
        })
        .addCase('EDIT_EMAIL', (state, action) => {
            return {...state, email: action.payload};
        });
});

export default userReducer;
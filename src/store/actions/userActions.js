import { createAction } from "@reduxjs/toolkit";

export const editName = createAction('EDIT_NAME');
export const editSurname = createAction('EDIT_SURNAME');
export const editAge = createAction('EDIT_AGE');
export const editEmail = createAction('EDIT_EMAIL');
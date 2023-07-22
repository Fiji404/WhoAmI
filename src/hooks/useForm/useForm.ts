import { FormActionTypes } from '@/types/hooks/UseForm/UseForm';
import { useReducer } from 'react';

type FormData = typeof INITIAL_FORM_DATA;
type FormAction = { type: FormActionTypes; value: string };

const INITIAL_FORM_DATA = {
    fullName: '',
    emailSubject: '',
    emailText: ''
};

const formReducer = (state: FormData, action: FormAction) => {
    if (action.type === 'FULL_NAME') return { ...state, fullName: action.value };
    if (action.type === 'EMAIL_SUBJECT') return { ...state, emailSubject: action.value };
    if (action.type === 'EMAIL_TEXT') return { ...state, emailText: action.value };
    console.log(action.value);
    return state;
};

export const useForm = () => {
    const [formData, dispatch] = useReducer(formReducer, INITIAL_FORM_DATA);
    return { formData, dispatch };
};

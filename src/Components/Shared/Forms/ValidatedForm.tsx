import React, {useState,useEffect,MouseEvent, ChangeEvent} from 'react';
//import {ValidationError} from './ValidationError';
//import { GetMessages } from './ValidationMessages';

// useForm functional componen
export const useForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);
//React.ChangeEvent<HTMLInputElement>

    // onChange
    const onChange: (event:any) => void = (event: any) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values);
    };


//React.FormEvent<HTMLFormElement>
    // onSubmit
    const onSubmit: (event:any) => Promise<void> = async (event:any) => {
        event.preventDefault();
        await callback(values); // triggering the callback
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
    };
}

export default function CompanyForm() {
    const initialState = {
        name: "",
        url: "",
        accounNumber: "",
        phone: ""
    };
    // a submit function that will execute upon form submission
    const companyCallback = async (values:any) =>  {
        // send "values" to database
        console.log('Company Submitted', values);
    };  
     // getting the event handlers from our custom hook
     const { onChange, onSubmit, values } = useForm(
        companyCallback,
        initialState
    );

 
      
        return (
          <form onSubmit={onSubmit}>
            <label>
              Company Name:
              <input
                name='name'
                id='name'
                placeholder=''
                onChange={onChange}
                required
                />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
     


}
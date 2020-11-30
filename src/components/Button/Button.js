import React from 'react';
import './Button.css';


// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = '';

    let types =['primary', 'danger', 'success', 'warning', 'primary-white','primary-shade','large','large-shade','large-white','danger-white']

    if(types.includes(props.tyoe)){
        classList+= `button-${props.type}`
    }

    return (
    <button className={`button-${props.type}`}>
        {props.label}
    </button> 
    )
}

export default Button; 
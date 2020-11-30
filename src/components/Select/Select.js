import React from 'react';
import './Select.css';



const Select = (props) => {
    let classList = "";
    let type = ['select','medium-select','small-select','shadow']
   
    if(type.includes(props.type)){
        classList+= `select-${props.type}`
    }

    return (
        <select className={`select-${props.type}`}>
            {props.label}
            <option>Select</option>
        </select> 
        )
    }


export default Select; 
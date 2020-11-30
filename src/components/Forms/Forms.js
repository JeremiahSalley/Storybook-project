import React from 'react';
import './Forms.css';

const Forms = (props) => {
    let classList = '';
    let title = '';
    let place = '';
    let type = ['medium-email','large-email']
   
    if(type.includes(props.type)){
        classList+= `forms-${props.type}`
    }

    if(props.title){
        title += props.title; 
    }
    if(props.place) {
        place += props.place;
    }
    if(!props.place) {
        place += props.title;
    }

    return (
        <form onSubmit={props.onSubmit}>
            <h3>{title}</h3>
            <input 
                className={`forms-${props.type}`}
                placeholder={place}
                onChange={props.onChange}
            ></input>
        </form>
    )
}

export default Forms; 


import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

// const style = {
//     backgroundColor:'#0069D9',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: '#0069D9'
// }
// const styleSuccess = {
//     backgroundColor:'#249D3C',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: '#249D3C'
// }

// const styleDanger = {
//     backgroundColor:'#D72E3C',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: '#D72E3C'
// }

// const styleWarning = {
//     backgroundColor:'#FFB90C',
//     color: 'black',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: '#FFB90C'
// }

// storiesOf('Button', module)
//     .add('Primary', () => <Button
//         label="Primary"
//         style={style}
//     />)

// storiesOf('Button', module)
//     .add('Success', () => <Button
//         label="Success"
//         style={styleSuccess}
//     />)

// storiesOf('Button', module)
//     .add('Danger', () => <Button
//         label="Danger"
//         style={styleDanger}
//     />)
    
// storiesOf('Button', module)
//     .add('Warning', () => <Button
//         label="Warning"
//         style={styleWarning}
//     />)

function helloWorld(){
    alert('Button Component Executed props.onClick')
}

storiesOf('Button', module)
    .add('Primary', () => <Button
    type="primary"
    onClick={helloWorld}
    label="Primary" />)

    .add('Success', () => <Button
        label="Success"
        type="primary"
    />)
    .add('Danger', () => <Button
        label="Danger"
        type='primary'
    />)
    .add('Warning', () => <Button
        label="Warning"
        type='primary'
    />)
    .add('Large Primary', () => <Button
    type='primary'
    label='Large Primary Button' />)
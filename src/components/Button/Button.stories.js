import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

function helloWorld(){
    alert('Button Component Executed props.onClick')
}


// Primary blue color
storiesOf('Button', module)
    .add('Primary', () => <Button
        type="primary"
        label="Do Something"
    />)

    .add('Primary-white', () => <Button
        label="Do Something"
        type='primary-white'
    />)
    .add('Primary-shade', () => <Button
        label="Do Something"
        type='primary-shade'
    />)
    .add('Large Primary', () => <Button
        type='large'
        label='Do Something' 
    />)
    .add('Large Shade', () => <Button
        type='large-shade'
        label='Do Something' 
    />)
    .add('Large White', () => <Button
        type='large-white'
        label='Do Something' 
    />)
// Danger red color
    .add('Danger with hover', () => <Button
        label="Do Something"
        type='danger'
    />)
    .add('Danger white', () => <Button
        label="Do Something"
        type='danger-white'
    />)
    .add('Danger Shade', () => <Button
        label="Do Something"
        type='danger-shade'
    />)
    .add('Large Danger', () => <Button
        type='danger-large'
        label='Do Something' 
    />)
    .add('Large Danger Shade', () => <Button
        type='danger-large-shade'
        label='Do Something' 
    />)
    .add('Large Danger White', () => <Button
        type='danger-large-white'
        label='Do Something' 
    />)

// Success Green Button 

    .add('Success with hover', () => <Button
        label="Do Something"
        type='success'
    />)
    .add('Success white', () => <Button
        label="Do Something"
        type='success-white'
    />)
    .add('Success Shade', () => <Button
        label="Do Something"
        type='success-shade'
    />)
    .add('Large Success', () => <Button
        type='success-large'
        label='Do Something' 
    />)
    .add('Large Success Shade', () => <Button
        type='success-large-shade'
        label='Do Something' 
    />)
    .add('Large Success White', () => <Button
        type='success-large-white'
        label='Do Something' 
    />)

// Warning Yellow Color 

    .add('Warning with hover', () => <Button
        label="Do Something"
        type='warning'
    />)
    .add('Warning white', () => <Button
        label="Do Something"
        type='warning-white'
    />)
    .add('Warning Shade', () => <Button
        label="Do Something"
        type='warning-shade'
    />)
    .add('Large Warning', () => <Button
        type='warning-large'
        label='Do Something' 
    />)
    .add('Large Warning Shade', () => <Button
        type='warning-large-shade'
        label='Do Something' 
    />)
    .add('Large Warning White', () => <Button
        type='warning-large-white'
        label='Do Something' 
    />)

    // Default black button 

    .add('Default with hover', () => <Button
        label="Do Something"
        type='default'
    />)
    .add('Default white', () => <Button
        label="Do Something"
        type='default-white'
    />)
    .add('Default Shade', () => <Button
        label="Do Something"
        type='default-shade'
    />)
    .add('Large Default', () => <Button
        type='default-large'
        label='Do Something' 
    />)
    .add('Large Default Shade', () => <Button
        type='default-large-shade'
        label='Do Something' 
    />)
    .add('Large Default White', () => <Button
        type='default-large-white'
        label='Do Something' 
    />)

    //Cart and Favorite 

    .add('Add to Cart', () => <Button
        label="Add to Cart"
        type='cart'
    />)
    .add('Favorite', () => <Button
        label="Add to Favorite"
        type='favorite'
    />)
    .add('Heart', () => <Button
        label=""
        type='heart'
    />)
    .add('Shopping Cart', () => <Button
        label=""
        type='shopping'
    />)

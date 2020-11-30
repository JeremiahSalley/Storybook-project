import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Forms';

storiesOf('Forms', module)
    .add('Email', () => <Form
        title='Email'
        
    />)
    .add('Medium Email', () => <Form 
        title='Email'
        type='medium-email'
    />)
    .add('large Email', () => <Form 
        title='Email'
        type='large-email'
        
    />)     
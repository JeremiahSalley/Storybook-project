import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './Select';

storiesOf('Select', module)
    .add('Select', () => <Select
        type='select'
    />)
    .add('Medium Select', () => <Select
        type='medium-select'
    />)
    .add('Small Select', () => <Select
        type='small-select'
    />)
    .add('Shadow Select', () => <Select 
        type='shadow-select'
    />)
    .add('Shadow Medium', () => <Select 
        type='shadow-medium'
    />)
    .add('Shadow Small', () => <Select 
        type='shadow-small'
    />)
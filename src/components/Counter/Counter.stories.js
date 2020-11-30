import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './Counter.js';



storiesOf("Counter", module)
.add('Counter', () => <Counter
max={25} min={-23} value={3} step={1}
/>)


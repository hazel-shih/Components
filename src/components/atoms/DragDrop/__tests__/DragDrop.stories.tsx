import React from 'react';
import { storiesOf } from '@storybook/react';

import DragDrop from 'components/atoms/DragDrop';

const stories = storiesOf('atoms/DragDrop', module);

stories.add('__interactive', () => <DragDrop boxNum={5} />);

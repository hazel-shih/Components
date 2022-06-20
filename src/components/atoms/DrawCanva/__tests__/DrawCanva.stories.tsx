import React from 'react';
import { storiesOf } from '@storybook/react';

import DrawCanva from 'components/atoms/DrawCanva';

const stories = storiesOf('atoms/DrawCanva', module);

stories.add('__interactive', () => <DrawCanva />);

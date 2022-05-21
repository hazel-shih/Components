import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgressStep from 'components/atoms/ProgressStep';

const stories = storiesOf('atoms/ProgressStep', module);

stories.add('__interactive', () => <ProgressStep progressNum={5} />);

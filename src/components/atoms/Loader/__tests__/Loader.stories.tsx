import React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from 'components/atoms/Loader';

const stories = storiesOf('atoms/Loader', module);

stories.add('__interactive', () => <Loader />);

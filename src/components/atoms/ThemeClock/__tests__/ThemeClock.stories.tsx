import React from 'react';
import { storiesOf } from '@storybook/react';

import ThemeClock from 'components/atoms/ThemeClock';

const stories = storiesOf('atoms/ThemeClock', module);

stories.add('__interactive', () => <ThemeClock />);

import React from 'react';
import { storiesOf } from '@storybook/react';

import RippleButton from 'components/atoms/RippleButton';

const stories = storiesOf('atoms/RippleButton', module);

stories.add('__interactive', () => <RippleButton />);

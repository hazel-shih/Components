import React from 'react';
import { storiesOf } from '@storybook/react';

import IncrementingCounter from 'components/atoms/IncrementingCounter';
import Instagram from 'images/icon/instagram.png';

const stories = storiesOf('atoms/IncrementingCounter', module);

stories.add('__interactive', () => (
	<IncrementingCounter imgSrc={Instagram} targetNumber={1234567} label="Instagtram Followers" />
));

import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

interface LoaderProperty {
	className?: string;
}

const Loader: React.FC<LoaderProperty> = ({ className }) => (
	<div className={classnames(styles.loader, className)} />
);

export default Loader;

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import styles from './index.css';

interface IncrementingCounterProperty {
	imgSrc: string;
	targetNumber: number;
	label: string;
	className?: string;
}

const numberWithCommas = (number: number) =>
	// 待弄懂
	number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const IncrementingCounter: React.FC<IncrementingCounterProperty> = ({
	imgSrc,
	targetNumber,
	label,
	className,
}) => {
	// 300 is custom speed, the bigger the slower
	const increment = targetNumber / 300;
	const [currentNum, setCurrentNum] = useState<number>(0);

	useEffect(() => {
		if (currentNum < targetNumber) {
			setTimeout(() => {
				setCurrentNum(Math.ceil(currentNum + increment));
			}, 1);
		}
		if (currentNum >= targetNumber) {
			setCurrentNum(targetNumber);
		}
	}, [currentNum]);

	return (
		<div className={classnames(styles.incrementingCounter, className)}>
			<img src={imgSrc} alt="brand-logo" />
			<h1 className={styles.counter}>{numberWithCommas(currentNum)}</h1>
			<p>{label}</p>
		</div>
	);
};

export default IncrementingCounter;

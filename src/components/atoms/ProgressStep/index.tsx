import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './index.css';

interface ProgressStepProperty {
	progressNum: number;
	className?: string;
}

const ProgressStep: React.FC<ProgressStepProperty> = ({ progressNum, className }) => {
	const [currentActive, setCurrentActive] = useState<number>(1);
	return (
		<div className={classnames(styles.progressStep, className)}>
			<div className={styles.progressContainer}>
				<div className={styles.line} />
				{Array(progressNum)
					.fill(null)
					.map((_, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<div className={styles.progress} key={index}>
							{index + 1}
						</div>
					))}
			</div>
			<div className={styles.buttons}>
				<button disabled type="button">
					Prev
				</button>
				<button type="button" onClick={() => setCurrentActive(currentActive + 1)}>
					Next
				</button>
			</div>
		</div>
	);
};

export default ProgressStep;

/* eslint-disable react/no-array-index-key */
import React, { useState, CSSProperties } from 'react';
import classnames from 'classnames';

import styles from './index.css';

interface ProgressStepProperty {
	progressNum: number;
	className?: string;
}

const ProgressStep: React.FC<ProgressStepProperty> = ({ progressNum, className }) => {
	// start from 0
	const [currentProgress, setCurrentProgress] = useState<number>(0);
	return (
		<div className={classnames(styles.progressStep, className)}>
			<div className={styles.progressContainer}>
				<div
					className={styles.line}
					style={
						{ '--line-width': `${(currentProgress / (progressNum - 1)) * 100}%` } as CSSProperties
					}
				/>
				{Array(progressNum)
					.fill(null)
					.map((_, index) => (
						<div
							className={classnames(styles.progress, {
								[styles.active]: index <= currentProgress,
							})}
							key={index}
						>
							{index + 1}
						</div>
					))}
			</div>
			<div className={styles.buttons}>
				<button
					type="button"
					onClick={() => {
						setCurrentProgress(currentProgress - 1);
					}}
					disabled={currentProgress === 0}
				>
					Prev
				</button>
				<button
					type="button"
					onClick={() => {
						setCurrentProgress(currentProgress + 1);
					}}
					disabled={currentProgress === progressNum - 1}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ProgressStep;

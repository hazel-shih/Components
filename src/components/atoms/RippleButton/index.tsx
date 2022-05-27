import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './index.css';

interface RippleButtonProperty {
	className?: string;
}

type PointPosition = {
	x: null | number;
	y: null | number;
};

const RippleButton: React.FC<RippleButtonProperty> = ({ className }) => {
	const [pointPosition, setPointPosition] = useState<PointPosition>({
		x: null,
		y: null,
	});

	return (
		<div className={styles.wrapper}>
			<button
				type="button"
				className={classnames(styles.rippleButton, className)}
				onClick={(e: React.MouseEvent) => {
					const { clientX, clientY } = e;
					const { offsetTop, offsetLeft } = e.target;
					setPointPosition({
						x: clientX - offsetLeft,
						y: clientY - offsetTop,
					});
					setTimeout(() => {
						setPointPosition({
							x: null,
							y: null,
						});
					}, 500);
				}}
			>
				CLICK ME
				{pointPosition.x && (
					<span
						className={styles.circleEffect}
						style={{ top: `${pointPosition.y}px`, left: `${pointPosition.x}px` }}
					/>
				)}
			</button>
		</div>
	);
};

export default RippleButton;

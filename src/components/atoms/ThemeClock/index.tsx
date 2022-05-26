import React, { useEffect, useState, CSSProperties } from 'react';
import classnames from 'classnames';
import { getHours, getMinutes, getSeconds, format } from 'date-fns';

import styles from './index.css';

interface ThemeClockProperty {
	className?: string;
}

const ThemeClock: React.FC<ThemeClockProperty> = ({ className }) => {
	const [currentTime, setCurrentTime] = useState<Date>(new Date());
	useEffect(() => {
		setTimeout(() => {
			setCurrentTime(new Date());
		}, 1000);
	}, [currentTime]);

	return (
		<div className={classnames(styles.themeClock, className)}>
			<div className={styles.clock}>
				<div
					className={classnames(styles.needle, styles.hour)}
					style={{ '--hour-needle-degree': `${getHours(currentTime) * 6}deg` } as CSSProperties}
				/>
				<div
					className={classnames(styles.needle, styles.minute)}
					style={{ '--minute-needle-degree': `${getMinutes(currentTime) * 6}deg` } as CSSProperties}
				/>
				<div
					className={classnames(styles.needle, styles.second)}
					style={{ '--second-needle-degree': `${getSeconds(currentTime) * 6}deg` } as CSSProperties}
				/>
				<div className={styles.centerPoint} />
			</div>
			<div className={styles.numberTime}>
				<p>{format(new Date(currentTime), 'yyyy / MM / dd')}</p>
				<p>{format(new Date(currentTime), 'hh：mm')}</p>
			</div>
		</div>
	);
};

export default ThemeClock;

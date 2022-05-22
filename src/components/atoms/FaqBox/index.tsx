import React, { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './index.css';

interface FaqProperty {
	question: string;
	answer: string;
	className?: string;
}

export const Faq: React.FC<FaqProperty> = ({ question, answer, className }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	return (
		<div className={classnames(styles.faq, className, { [styles.active]: isActive })}>
			<FontAwesomeIcon icon={faComment} className={styles.commentIcon} />
			<FontAwesomeIcon icon={faComment} className={styles.commentIcon} />
			<h2>{question}</h2>
			<p>{answer}</p>
			<FontAwesomeIcon
				icon={faAngleDown}
				className={classnames(styles.angle, { [styles.active]: isActive })}
				onClick={() => setIsActive(!isActive)}
			/>
		</div>
	);
};

export type FaqList = {
	question: string;
	answer: string;
}[];

interface FaqBoxProperty {
	faqList: FaqList;
	className?: string;
}

const FaqBox: React.FC<FaqBoxProperty> = ({ faqList, className }) => (
	<div className={classnames(styles.faqBox, className)}>
		{faqList.map(item => (
			<Faq question={item.question} answer={item.answer} />
		))}
	</div>
);

export default FaqBox;

/* eslint-disable no-shadow */
import React, { ReactNode, useState } from 'react';
import classnames from 'classnames';

import styles from './index.css';

enum ChoosenObjDragStep {
	DragStart,
	DragEnd,
}

enum TargetObjDragStep {
	DragEnter,
	DragOver,
	DragLeave,
	Drop,
}

const ChoosenDragBox: React.FC = () => {
	const [isFilled, setIsFilled] = useState<boolean>(true);
	const [choosenObjDragState, setChoosenObjDragState] = useState<ChoosenObjDragStep | null>(null);

	return (
		<div
			className={classnames({
				[styles.hold]: choosenObjDragState === ChoosenObjDragStep.DragStart,
				[styles.fill]: isFilled,
			})}
			draggable="true"
			onDragStart={() => {
				setChoosenObjDragState(ChoosenObjDragStep.DragStart);
				setTimeout(() => {
					setIsFilled(false);
				}, 0);
			}}
		/>
	);
};

interface TargetDragBoxProperty {
	choosenBoxNode?: ReactNode;
}

const TargetDragBox: React.FC<TargetDragBoxProperty> = ({ choosenBoxNode }) => {
	const [targetObjDragStep, setTargetObjDragStep] = useState<TargetObjDragStep | null>(null);
	return (
		<div
			className={classnames(styles.empty, {
				[styles.hovered]: targetObjDragStep === TargetObjDragStep.DragOver,
			})}
			onDragOver={() => setTargetObjDragStep(TargetObjDragStep.DragOver)}
			onDragEnter={() => setTargetObjDragStep(TargetObjDragStep.DragEnter)}
			onDragLeave={() => setTargetObjDragStep(TargetObjDragStep.DragLeave)}
			onDrop={() => setTargetObjDragStep(TargetObjDragStep.Drop)}
		>
			{choosenBoxNode}
		</div>
	);
};

interface DragDropProperty {
	boxNum: number;
	className?: string;
}

const DragDrop: React.FC<DragDropProperty> = ({ boxNum, className }) => {
	const [isFilled, setIsFilled] = useState<boolean>(true);
	const [choosenObjDragState, setChoosenObjDragState] = useState<ChoosenObjDragStep | null>(null);
	const [targetObjDragStep, setTargetObjDragStep] = useState<TargetObjDragStep | null>(null);

	return (
		<div className={classnames(styles.dragDrop, className)}>
			<TargetDragBox choosenBoxNode={ChoosenDragBox({})} />
			{Array(boxNum)
				.fill(null)
				.map(item => (
					<TargetDragBox />
				))}
		</div>
	);
};

export default DragDrop;

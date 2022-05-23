import React, { useState, CSSProperties } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import styles from './index.css';

type ImageList = {
	src: string;
}[];

interface ImageSlidesProperty {
	imageList: ImageList;
	className?: string;
}

const getImageUrl = (imageSrc: string) => `url(${imageSrc})`;

const ImageSlides: React.FC<ImageSlidesProperty> = ({ imageList, className }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	return (
		<div className={classnames(styles.imageSlides, className)}>
			<div
				className={styles.blackBackground}
				style={
					{ '--current-image': getImageUrl(imageList[currentImageIndex].src) } as CSSProperties
				}
			/>
			<div
				className={styles.currentImageContainer}
				style={
					{ '--current-image': getImageUrl(imageList[currentImageIndex].src) } as CSSProperties
				}
			>
				<FontAwesomeIcon
					icon={faCaretLeft}
					className={classnames(styles.arrow, styles.left)}
					onClick={() => {
						if (currentImageIndex === 0) {
							setCurrentImageIndex(imageList.length - 1);
						} else {
							setCurrentImageIndex(currentImageIndex - 1);
						}
					}}
				/>
				<FontAwesomeIcon
					icon={faCaretRight}
					className={classnames(styles.arrow, styles.right)}
					onClick={() => {
						if (currentImageIndex === imageList.length - 1) {
							setCurrentImageIndex(0);
						} else {
							setCurrentImageIndex(currentImageIndex + 1);
						}
					}}
				/>
			</div>
		</div>
	);
};

export default ImageSlides;

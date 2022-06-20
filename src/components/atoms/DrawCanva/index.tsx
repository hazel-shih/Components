import React, { useState, useEffect, useRef, useCallback } from 'react';
import classnames from 'classnames';

import styles from './index.css';

const getMousePos = (canvas: HTMLCanvasElement, evt: MouseEvent) => {
	const rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top,
	};
};

const mouseMove = (canvas: HTMLCanvasElement, evt: MouseEvent, ctx: CanvasRenderingContext2D) => {
	const mousePos = getMousePos(canvas, evt);
	ctx.lineCap = 'round';
	ctx.lineWidth = 2;
	ctx.lineJoin = 'round';
	ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
	ctx.shadowColor = 'black'; // 邊緣顏色
	ctx.lineTo(mousePos.x, mousePos.y);
	ctx.stroke();
};

const getTouchPos = (canvas: HTMLCanvasElement, evt: TouchEvent) => {
	const rect = canvas.getBoundingClientRect();
	return {
		x: evt.touches[0].clientX - rect.left,
		y: evt.touches[0].clientY - rect.top,
	};
};

const touchMove = (canvas: HTMLCanvasElement, evt: TouchEvent, ctx: CanvasRenderingContext2D) => {
	const touchPos = getTouchPos(canvas, evt);
	ctx.lineWidth = 2;
	ctx.lineCap = 'round'; // 繪制圓形的結束線帽
	ctx.lineJoin = 'round'; // 兩條線條交匯時，建立圓形邊角
	ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
	ctx.shadowColor = 'black'; // 邊緣顏色
	ctx.lineTo(touchPos.x, touchPos.y);
	ctx.stroke();
};

const DrawCanva: React.FC = () => {
	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const contextRef = useRef<null | CanvasRenderingContext2D>(null);
	const [isDrawing, setIsDrawing] = useState<boolean>(false);
	const [signPicSrc, setSignPicSrc] = useState<string>('');

	const startMouseDraw = (e: MouseEvent) => {
		if (!canvasRef.current || !contextRef.current) {
			return;
		}
		setIsDrawing(true);
		const mousePos = getMousePos(canvasRef.current, e);
		contextRef.current.beginPath();
		contextRef.current.moveTo(mousePos.x, mousePos.y);
		// 避免游標超出畫布造成畫面滾動
		e.preventDefault();
	};

	const mouseDraw = useCallback(
		(e: MouseEvent) => {
			if (!canvasRef.current || !contextRef.current || !isDrawing) {
				return;
			}
			mouseMove(canvasRef.current, e, contextRef.current);
		},
		[isDrawing],
	);

	const startTouchDraw = useCallback((e: TouchEvent) => {
		if (!canvasRef.current || !contextRef.current) {
			return;
		}
		setIsDrawing(true);
		const touchPos = getTouchPos(canvasRef.current, e);
		contextRef.current.beginPath();
		contextRef.current.moveTo(touchPos.x, touchPos.y);
		e.preventDefault();
	}, []);

	const touchDraw = useCallback(
		(e: TouchEvent) => {
			if (!canvasRef.current || !contextRef.current || !isDrawing) {
				return;
			}
			touchMove(canvasRef.current, e, contextRef.current);
		},
		[isDrawing],
	);

	const finishDraw = useCallback(() => {
		setIsDrawing(false);
	}, []);

	const removeDraw = useCallback(() => {
		if (!canvasRef.current || !contextRef.current) {
			return;
		}
		contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		setIsDrawing(false);
	}, []);

	const convertToImage = () => {
		if (!canvasRef.current) {
			return;
		}
		const imageSrc = canvasRef.current.toDataURL('image/png');
		setSignPicSrc(imageSrc);
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas || !canvas.getContext) {
			return;
		}
		contextRef.current = canvas.getContext('2d');
		if (!contextRef.current) {
			return;
		}
		// 抗鋸齒
		if (window.devicePixelRatio && window.devicePixelRatio !== 1) {
			const { width, height } = canvas;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			canvas.height = height * window.devicePixelRatio;
			canvas.width = width * window.devicePixelRatio;
			contextRef.current.scale(window.devicePixelRatio, window.devicePixelRatio);
		}
	}, []);

	return (
		<div className={classnames(styles.drawCanva)}>
			<canvas
				id="canvas"
				ref={canvasRef}
				width="600"
				height="300"
				onMouseDown={e => startMouseDraw(e as unknown as MouseEvent)}
				onMouseMove={e => mouseDraw(e as unknown as MouseEvent)}
				onMouseUp={finishDraw}
				onTouchStart={e => startTouchDraw(e as unknown as TouchEvent)}
				onTouchMove={e => touchDraw(e as unknown as TouchEvent)}
				onTouchEnd={finishDraw}
				// 防止使用者超出畫布又回到畫布時不小心畫到畫布
				onMouseOut={finishDraw}
				onBlur={() => {}}
				className={classnames({ [styles.banTouchAction]: isDrawing })}
			/>
			<div className={styles.buttons}>
				<button type="button" onClick={removeDraw}>
					清除
				</button>
				<button type="button" onClick={convertToImage}>
					轉成圖片
				</button>
			</div>
			{signPicSrc !== '' && <img className={styles.sign} src={signPicSrc} alt="sign png" />}
		</div>
	);
};

export default DrawCanva;

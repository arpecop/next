import { useEffect, useLayoutEffect, useState } from "react";

function ResizerGPT(props: {
	width: number;
	customwidth?: number;
	height: number;
	src: string;
}) {
	const [scale, setScale] = useState(1);
	const [marginTop, setMarginTop] = useState(0);
	const [marginLeft, setMarginLeft] = useState(0);

	const calculateScaleAndMargins = () => {
		const w = props.width + 20;
		const aspectRatio = w / props.height;
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		console.log({ aspectRatio });
		let scale;
		let resizedWidth;
		let resizedHeight;

		resizedWidth = w;
		resizedHeight = props.height;
		scale = Math.min(
			viewportWidth / resizedWidth,
			viewportHeight / resizedHeight
		);
		scale = scale > 1 ? 1 : scale;
		const resizew = ((viewportWidth - resizedWidth) / 2 / viewportWidth) * 100;
		setMarginLeft(resizew);
		setMarginTop(resizew / aspectRatio > 0 ? 0 : resizew / aspectRatio);

		setScale(scale);
	};

	useLayoutEffect(() => {
		calculateScaleAndMargins();
		window.addEventListener("resize", calculateScaleAndMargins);
		return () => {
			window.removeEventListener("resize", calculateScaleAndMargins);
		};
	}, [props.width, props.height]);

	useEffect(() => {
		console.table({ marginLeft, marginTop });
	}, [marginTop, scale]);

	return (
		<div className='relative bg-white'>
			<iframe
				src={props.src}
				className='aspect-video absolute overflow-hidden'
				style={{
					transform: `scale(${scale})`,
					marginTop: marginTop + "%",
					marginLeft: Math.ceil(marginLeft) + "%",
					position: "absolute",
					overflow: "hidden",
				}}
				scrolling='no'
				width={props.width}
				height={props.height}
			/>
		</div>
	);
}

export default ResizerGPT;

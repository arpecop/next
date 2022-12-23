import React, { ReactNode, useLayoutEffect, useRef, useState } from "react";
import LoadingResult from "./LoadingResult";

const MyWrapper = ({ children }: { children: ReactNode }) => {
	const refContainer = useRef<HTMLDivElement>(null);

	const [zoom, setZoom] = React.useState(1.3);
	const [widthContainer, setWidth] = useState(1560);

	useLayoutEffect(() => {
		setWidth(refContainer.current!.offsetWidth);
	}, []);

	React.useEffect(() => {
		const handleResize = () => {
			//const viewportWidth = window.innerWidth;

			const z = widthContainer / 1560;
			const h = 630 * z;

			console.log({ z, h: Math.round(h) });
			setZoom(z);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [widthContainer]);

	return (
		<div>
			<div className='flex flex-col flex   bg-amber-900 relative overflow-hidden'>
				<div
					className='w-full'
					style={{
						transform: "scale(1)",
						//transform: "scale(" + zoom + ")",
					}}
				>
					{children}
				</div>
			</div>
			<div
				className='container bg-black h-2 w-full absolute'
				ref={refContainer}
			/>
		</div>
	);
};

const MyComponent = () => {
	return (
		<MyWrapper>
			<div
				style={{
					width: 1560,
					height: 630,
				}}
			>
				<LoadingResult name='test' />
			</div>
		</MyWrapper>
	);
};

export default MyComponent;

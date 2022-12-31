import React, { useEffect, useState } from "react";

function MyComponent({ src }: { src: string }) {
	const [newsrc, setNewSrc] = useState<string>("");
	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await fetch(src);
				const blob = await response.blob();
				const objectUrl = URL.createObjectURL(blob);

				setNewSrc(objectUrl);
			} catch (error) {
				console.error(error);
			}
		};

		fetchImage();
	}, [src]);

	return <img id="my-image" alt="My Image" src={newsrc} />;
}
export default MyComponent;

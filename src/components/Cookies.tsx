import { useEffect, useRef } from "react";
import { setCookie } from "../utils/cookies";

const Cookies = () => {
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = elementRef.current;
		setCookie("seen", "ok");
		if (element) {
			element.style.transition = "transform 1300ms ease-in-out";
			const timer = setTimeout(() => {
				element.style.transform = "translateY(200%)";
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<div className='alert shadow-lg fixed container bottom-10' ref={elementRef}>
			<div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
					/>
				</svg>

				<span>използваме Cookies без особена причина.</span>
			</div>
			<div className='flex-none invisible'>
				<button className='btn btn-sm btn-ghost'>Deny</button>
				<button className='btn btn-sm btn-primary'>Accept</button>
			</div>
		</div>
	);
};

export default Cookies;

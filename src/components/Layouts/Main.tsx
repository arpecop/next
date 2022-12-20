import Header from "@/components/Layouts/Header";
import { ReactNode, useEffect } from "react";

import Footer from "./Footer";

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
	hideFooter?: boolean;
	title?: string;
};
declare let adsbygoogle: any;

const Main = (props: IMainProps) => {
	useEffect(() => {
		var ads = document.getElementsByClassName("adsbygoogle").length as number
		for (var i = 0; i < ads; i++) {
			try {
				(adsbygoogle = (window as any).adsbygoogle || []).push({});
			} catch (e) {
				console.log(e)
			}
		}
	}, []);
	return (
		<>

			{props.meta}


			<div className='flex min-h-screen flex-col'>
				<Header title={props.title} />
				<main className='container mx-auto flex grow flex-col justify-center px-2 pb-20 sm:px-4 md:px-8 z-30 -my-10'>
					{props.children}
				</main>

				<ins className="adsbygoogle"
					style={{ display: 'block', textAlign: 'center' }}
					data-ad-layout="in-article"
					data-ad-format="fluid"
					data-ad-client="ca-pub-5476404733919333"
					data-ad-slot="1374619867"></ins>
				<Footer hideFooter={props.hideFooter} />
			</div>
		</>
	);
};
// dasd
export default Main;

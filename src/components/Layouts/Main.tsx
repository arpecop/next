import Header from "@/components/Layouts/Header";
import { ReactNode, useEffect } from "react";

import Footer from "./Footer";

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
	hideFooter?: boolean;
	title?: string;
};


const Main = (props: IMainProps) => {
	useEffect(() => {
		let adsbygoogle: any;
		var ads = document.getElementsByClassName("adsbygoogle").length as number
		for (var i = 0; i < ads; i++) {
			try {
				(adsbygoogle = (window as any).adsbygoogle || []).push({});
			} catch (e) {
				console.log(e)
			}
		}
	}, []);
	return (<div className='flex min-h-screen flex-col'>
		{props.meta}
		<Header title={props.title} />
		<main className='container mx-auto flex grow flex-col justify-center   z-30'>
			{props.children}
		</main>
		<div className='z-20 rounded-r-lg overflow-hidden flex justify-center items-center'>
			<ins className="adsbygoogle"
				style={{ display: 'block', textAlign: 'center' }}
				data-ad-layout="in-article"
				data-ad-format="fluid"
				data-ad-client="ca-pub-5476404733919333"
				data-ad-slot="1374619867"></ins>
		</div>
		<Footer hideFooter={props.hideFooter} />
	</div>);
};
// dasd
export default Main;

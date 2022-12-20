import Logo from "@/components/Layouts/Header";
import type { ReactNode } from "react";

import Footer from "./Footer";

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
	hideFooter?: boolean;
	title?: string;
};

const Main = (props: IMainProps) => {
	return (
		<>
			{props.meta}

			<div className='flex min-h-screen flex-col'>
				<Logo title={props.title} />
				<main className='container mx-auto flex grow flex-col justify-center px-2 pb-20 sm:px-4 md:px-8 z-30  -my-12'>

					{props.children}

					<div dangerouslySetInnerHTML={{
						__html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5476404733919333"
								 crossorigin="anonymous"></script>
						<!-- ResponsiveOldSchool -->
						<ins class="adsbygoogle"
								 style="display:block"
								 data-ad-client="ca-pub-5476404733919333"
								 data-ad-slot="4861550683"
								 data-ad-format="auto"
								 data-full-width-responsive="true"></ins>
						<script>
								 (adsbygoogle = window.adsbygoogle || []).push({});
						</script>`}} />
				</main>
				<Footer hideFooter={props.hideFooter} />
			</div>
		</>
	);
};
// dasd
export default Main;

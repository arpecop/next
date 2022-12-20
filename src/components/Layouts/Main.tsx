import Logo from "@/components/Layouts/Header";
import MenuNavBar from "@/components/MenuNavBar";
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
			<div className='navbar absolute z-20'>
				<div className='navbar-start'>
					<div className='dropdown visible xs:visible sm:invisible md:invisible'>
						<label tabIndex={0} className='btn-ghost btn-circle btn'>
							<svg
								xmlns='http://w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h7'
								/>
							</svg>
						</label>
						<MenuNavBar
							className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow dark:text-white'
							hrefPass={true}
						/>
					</div>
				</div>
				<div className='navbar-center' />
				<div className='navbar-end'>
					<MenuNavBar
						className='menu rounded-box menu-horizontal invisible mr-12  dark:text-white xs:invisible   sm:visible md:visible'
						hrefPass={false}
						hideSwitcher
					/>
				</div>
			</div>
			<div className='flex min-h-screen flex-col'>
				<Logo title={props.title} />
				<main className='container mx-auto flex grow flex-col justify-center px-2 pb-20 sm:px-4 md:px-8'>
					<div dangerouslySetInnerHTML={{
						__html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5476404733919333"
						crossorigin="anonymous"></script>
					<ins class="adsbygoogle"
						style="display:block"
						data-ad-format="autorelaxed"
						data-ad-client="ca-pub-5476404733919333"
						data-ad-slot="4442449258"></ins>
					<script>
						(adsbygoogle = window.adsbygoogle || []).push({});
					</script>`}} />
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

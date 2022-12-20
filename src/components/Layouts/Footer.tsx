import Link from "next/link";
import Script from "next/script";

import Dialog from "@/components/Dialog";

function Footer({ hideFooter }: { hideFooter?: boolean }) {
	const newLocal = `bg-[url('/images/botwave.svg')] dark:bg-[url('/images/botwave-white.svg')] bg-cover bg-bottom`;
	return (
		<div className={newLocal}>
			{!hideFooter ? (
				<footer className='footer gap-y-2 px-10 font-bold text-neutral-content dark:text-gray-800  md:gap-y-6'>
					<div>
						<span className='footer-title'>Services</span>

						<Link href={"/?type=Jokes"} passHref>
							Вицове
						</Link>
						<Link href={"/news"} passHref>
							Новини
						</Link>
						<Link href='https://eziktok.com/' passHref>
							ezikTok - форуми
						</Link>
						<Link href='/business/' passHref>
							Бизнес регистър
						</Link>
					</div>

					<div>
						<span className='footer-title hidden md:block'>&nbsp;</span>
						<Link href={"/movies/"} passHref>
							Филми
						</Link>
						<Link href={"/tw"} passHref>
							Туитър ДБ (бета)
						</Link>
						<Link href={"https://rudixops.eu/"} passHref>
							DevOps
						</Link>
					</div>

					<div>
						<span className='footer-title'>Company</span>
						<Link href={"/other/about/"}>За</Link>
						<Link href={"/other/contact/"}>Контакт</Link>
					</div>
					<div>
						<span className='footer-title'>Legal</span>
						<Link href={"/other/terms/"} passHref>
							Terms of use
						</Link>
					</div>
					<div>
						<span className='footer-title hidden md:block'>&nbsp;</span>
						<Link href={"/other/privacy/"} passHref>
							Privacy policy
						</Link>
					</div>
				</footer>
			) : (
				<div className='py-4 opacity-50 sm:py-6 md:py-8 lg:py-12 xl:py-20' />
			)}

			<div className='mb-2 flex   justify-end'>
				<div className='mr-4 block dark:hidden sm:mt-0 md:mt-8 lg:mt-12'>
					<img src='/powered.png' alt='powered' width={333} height={56} />
				</div>
				<div className='mr-4 hidden dark:block sm:mt-0 md:mt-8 lg:mt-12'>
					<img
						src='/powered-white.png'
						alt='powered white'
						width={333}
						height={56}
					/>
				</div>
			</div>

			<Dialog />
			<Script
				src='https://googletagmanager.com/gtag/js?id=G-99VWGKYVS6'
				strategy='afterInteractive'
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
			</Script>
		</div>
	);
}

export default Footer;

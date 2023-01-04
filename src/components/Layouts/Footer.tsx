import Link from "next/link";
import Script from "next/script";
const Analytics = ({ className }: { className: string }) => (
	<div className={className}>
		<svg
			xmlns="http://w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className="w-full  z-0 hidden dark:block"
		>
			<path
				fill="#00b894"
				d="m0 224 48 10.7C96 245 192 267 288 240c96-27 192-101 288-96s192 91 288 101.3c96 10.7 192-53.3 288-90.6 96-37.7 192-47.7 240-53.4l48-5.3v224H0Z"
			/>
		</svg>

		<svg
			xmlns="http://w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className="w-full  z-0 dark:hidden block"
		>
			<path
				fill="#2d3748"
				d="m0 224 48 10.7C96 245 192 267 288 240c96-27 192-101 288-96s192 91 288 101.3c96 10.7 192-53.3 288-90.6 96-37.7 192-47.7 240-53.4l48-5.3v224H0Z"
			/>
		</svg>

		<Script
			async
			src="https://www.googletagmanager.com/gtag/js?id=G-PDX6T8DTFR"
			strategy="afterInteractive"
		/>
		<Script
			id="google-analytics"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-PDX6T8DTFR');`,
			}}
		/>
	</div>
);

function Footer({ hideFooter }: { hideFooter?: boolean }) {
	return !hideFooter ? (
		<footer className="footer gap-y-2 px-10 font-bold text-neutral-content dark:text-gray-800  md:gap-y-6   z-10 mb-4 relative">
			<div className="z-10">
				<span className="footer-title">Services</span>

				<Link href={"/?type=Jokes"} passHref>
					Вицове
				</Link>
				<Link href={"/news"} passHref>
					Новини
				</Link>
				<Link href="https://eziktok.com/" passHref>
					ezikTok - форуми
				</Link>
				<Link href="/business/" passHref>
					Бизнес регистър
				</Link>
			</div>

			<div className="z-10">
				<span className="footer-title hidden md:block">&nbsp;</span>
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

			<div className="z-10">
				<span className="footer-title">Company</span>
				<Link href={"/other/about/"}>За</Link>
				<Link href={"/other/contact/"}>Контакт</Link>
			</div>
			<div>
				<span className="footer-title">Legal</span>
				<Link href={"/other/terms/"} passHref>
					Terms of use
				</Link>
			</div>

			<div className="z-10">
				<span className="footer-title hidden md:block">&nbsp;</span>
				<Link href={"/other/privacy/"} passHref>
					Privacy policy
				</Link>
			</div>

			<Analytics className="absolute  w-full -bottom-4" />
			<div className="mb-2 absolute  right-2 -bottom-4">
				<img
					src="/images/powered-white.png"
					alt="powered white z-10"
					className="dark:invert"
				/>
			</div>
		</footer>
	) : (
		<div className="relative   py-12">
			<Analytics className="w-full absolute z-10 bottom-0" />
			<div className="flex justify-center items-center text-xs text-gray-600 z-10   absolute w-full bottom-2 drop-shadow-md dark:text-white">
				Copyright 2023 kloUn™ | All Rights Reserved ®
			</div>
			<div id="fb-root" />
		</div>
	);
}

export default Footer;

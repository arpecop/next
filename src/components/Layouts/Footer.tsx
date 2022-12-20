import Link from "next/link";




function Footer({ hideFooter }: { hideFooter?: boolean }) {

	return !hideFooter ? (
		<footer className='footer gap-y-2 px-10 font-bold text-neutral-content dark:text-gray-800  md:gap-y-6 relative z-10 mb-4 relative'>

			<div className='z-10'>

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




			<div className='z-10'>

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




			<div className='z-10'>

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



			<div className='z-10'>

				<span className='footer-title hidden md:block'>&nbsp;</span>
				<Link href={"/other/privacy/"} passHref>
					Privacy policy
				</Link>
			</div>	<svg xmlns="http://w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute w-full -bottom-4 z-0 hidden dark:block'>
				<path
					fill="#09f"
					d="m0 224 48 10.7C96 245 192 267 288 240c96-27 192-101 288-96s192 91 288 101.3c96 10.7 192-53.3 288-90.6 96-37.7 192-47.7 240-53.4l48-5.3v224H0Z"
				/>
			</svg>
			<svg xmlns="http://w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute w-full bottom-0 z-0 block dark:hidden -bottom-4'>
				<path
					fill="#2d3748"
					d="m0 256 60 5.3c60 5.7 180 15.7 300 21.4C480 288 600 288 720 272s240-48 360-48 240 32 300 48l60 16v32H0Z"
				/>
			</svg>
			<div className='mb-2 absolute  right-2 -bottom-4'>



				<img
					src='/powered-white.png'
					alt='powered white z-10'
				/>

			</div>

		</footer>
	) : (
		<div className='py-4 opacity-50 sm:py-6 md:py-8 lg:py-12 xl:py-20' />


	);
}

export default Footer;

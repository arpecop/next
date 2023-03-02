import Link from "next/link";
import Script from "next/script";
const Analytics = ({ className }: { className: string }) => (
  <div className={className}>
    <svg
      xmlns="http://w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="w-full  z-10 hidden dark:block"
    >
      <path
        fill="#00b894"
        d="m0 224 48 10.7C96 245 192 267 288 240c96-27 192-101 288-96s192 91 288 101.3c96 10.7 192-53.3 288-90.6 96-37.7 192-47.7 240-53.4l48-5.3v224H0Z"
      />
    </svg>

    <svg
      xmlns="http://w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="w-full  z-10 dark:hidden block"
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
    <div className="flex justify-center items-center text-xs text-gray-600   z-10   absolute w-full bottom-2 drop-shadow-md dark:text-white">
      2023 kloUn | All Rights Reserved ®
    </div>
    <Script
      async
      src="/ads.js"
      strategy="afterInteractive"
    />
  </div>

);
//analytics
function Footer({ hideFooter }: { hideFooter?: boolean }) {
  return !hideFooter ? (
    <footer className="relative">

      <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6  pb-6 bg gap-3 container mx-auto px-4">
        <div className="z-10 text-sm">
          <h3 className="headingbottom">Services</h3>

          <Link href={"/?type=Jokes"} passHref className="block">
            Вицове
          </Link>
          <Link href={"/news"} passHref className="block">
            Новини
          </Link>
          <Link href="https://eziktok.com/" passHref className="block">
            ezikTok
          </Link>
          <Link href="/business/" passHref className="block">
            Бизнес
          </Link>
        </div>

        <div className="z-10 text-sm text-right sm:text-left">
          <div className="headingbottom">&nbsp;</div>
          <Link href={"/movies/"} passHref className="block">
            Филми
          </Link>
          <Link href={"/tw"} passHref className="block">
            Туитър ДБ (бета)
          </Link>
          <Link href={"https://rudixops.eu/"} passHref className="block">
            DevOps
          </Link>
        </div>
        <div className="z-10 text-sm text-right sm:text-left hidden sm:block"></div>
        <div className="z-10 text-sm text-right sm:text-left hidden md:block"></div>
        <div className="z-10 text-sm">
          <h3 className="headingbottom">Company</h3>
          <Link href={"/other/about/"} className="block">
            За
          </Link>
          <Link href={"/other/contact/"} className="block">
            Контакт
          </Link>
        </div>
        <div className="z-10 text-sm">
          <h3 className="headingbottom text-right">Legal</h3>
          <Link href={"/other/terms/"} passHref className="block text-right">
            Terms of use
          </Link>
          <Link href={"/other/privacy/"} passHref className="block text-right">
            Privacy policy
          </Link>
        </div>
      </div>
      <Analytics className="w-full absolute z-0 bottom-0" />
    </footer>
  ) : (
    <div className="relative   py-14">

      <Analytics className="w-full absolute z-10 bottom-0" />
    </div>
  );
}

export default Footer;

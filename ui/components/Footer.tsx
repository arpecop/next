import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='pt-12 flex gap-6 flex-row mx-auto mb-1 flex-wrap  sm:m-0 justify-center sm:mx-6 z-10'>
      <div className='flex justify-center sm:justify-end   flex-0 w-full  drop-shadow-md'>
        <div className='flex'>
          <div className='mr-12'>COMPANY</div>
          <div className='mr-14'>SERVICES</div>
          <div className='mr'>LEGAL</div>
        </div>
      </div>
      <div className='shrink sm:grow left-5 -mt-10 sm:left-0 sm:m-0'>
        <span className='absolute heading text-2xl flex justify-center items-center -mt-12'>
          ezikTok
        </span>
      </div>
      <div className='z-10 -mt-4'>
        <Link passHref className='footerlink' href='/other/about/'>
          За
        </Link>
        <Link passHref className='footerlink' href='/other/contact/'>
          Контакт
        </Link>
      </div>
      <div className='relative flex flex-col justify-end z-10 -mt-4'>
        <Link passHref className='footerlink' href='https://eziktok.com/'>
          EzikTok
        </Link>
        <Link passHref className='footerlink' href='https://www.kloun.lol/news'>
          Новини
        </Link>
        <Link
          passHref
          className='footerlink'
          href='https://www.kloun.lol/business'
        >
          Бизнес
        </Link>
      </div>
      <div className='flex flex-col justify-end z-10 -mt-4'>
        <Link passHref className='footerlink' href='https://www.kloun.lol/'>
          Вицове
        </Link>
        <Link
          passHref
          className='footerlink'
          href='https://www.kloun.lol/movies/'
        >
          Филми
        </Link>
        <Link passHref className='footerlink' href='https://www.rudixops.eu/'>
          DevOps
        </Link>
      </div>
      <div className='text-right z-10 -mt-4'>
        <Link passHref className='footerlink' href='/other/terms/'>
          Terms of use
        </Link>
        <Link passHref className='footerlink' href='/other/privacy/'>
          Privacy policy
        </Link>
      </div>
      <div className='w-full'>
        <div className='text-center'>
          <div className='text-xs text-gray-600'>
            © 2023 ezikTok. All rights reserved.
          </div>
        </div>
        <div className='overflow-hidden bottom-0 right-0 dark:hidden w-full bg-black -z-10'>
          <svg
            width={582}
            height={662}
            xmlns='http://www.w3.org/2000/svg'
            className='opacity-50 float-right fixed right-0 bottom-0 -mr-20 -mb-52'
          >
            <defs>
              <filter
                x='-37.5%'
                y='-37.5%'
                width='175%'
                height='175%'
                filterUnits='objectBoundingBox'
                id='b'
              >
                <feGaussianBlur stdDeviation={50} in='SourceGraphic' />
              </filter>
              <filter
                x='-37.5%'
                y='-37.5%'
                width='175%'
                height='175%'
                filterUnits='objectBoundingBox'
                id='c'
              >
                <feGaussianBlur stdDeviation={50} in='SourceGraphic' />
              </filter>
              <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='a'>
                <stop stopColor='#60A5FA' stopOpacity={0} offset='0%' />
                <stop stopColor='#F656AA' offset='100%' />
              </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd'>
              <circle
                fill='url(#a)'
                filter='url(#b)'
                cx={314}
                cy={278}
                r={200}
              />
              <circle
                fillOpacity={0.2}
                fill='#111827'
                filter='url(#c)'
                cx={518}
                cy={345}
                r={200}
              />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}

import Search from '/components/ads/Search';
import Layout from '/components/Main';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import AnimIndexProducts from '../components/elements/AnimIndexProducts';
import Link from 'next/link';

const NotificationPermission = dynamic(
  () => import('/components/Notifications'),
  {
    ssr: false,
  },
);

export default function Home() {
  const cats = [
    {
      slug: 'AM',
      title: 'Авто Мото',
      descr: 'Всичко свързано с автомобилите',
      className:
        'bg-gradient-to-tr from-blue-400 via-cyan-700 to-orange-700 p-1 rounded-md',
      href: '/cars',
    },
    {
      slug: 'AD',
      title: 'Обяви',
      className:
        'bg-gradient-to-l from-pink-300 via-sky-500 to-orange-500 p-1 rounded-md',
      descr: 'Купувам / продавам / Наеми / Услуги',
      href: '/ads',
    },
  ];
  return (
    <Layout>
      <div className='grow container mx-auto z-20'>
        <AnimIndexProducts />
        <Search />
        <div className='flex flex-col items-center text-center'>
          <h2 className='font-bold text-2xl max-w-md md:text-3xl lg:text-5xl lg:max-w-2xl pb-4'>
            пусни за продажба практически всичко за{' '}
            <span className='underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2'>
              {' '}
              което се сетиш.
            </span>
          </h2>
          <p className='text opacity-90 max-w-sm lg:text-xl lg:max-w-2xl'>
            ezikTok e сайт за безплатни обяви в категории: Недвижими имоти,
            Автомобили и авточасти, Eлектроника, Мода, За бебето и детето, Дом и
            градина, Свободно време, Домашни любимци, Услуги, Работа, Екскурзии
            и почивки. В езикТок можете да намерите интересни обяви за продажба
            на почти всичко, което търсите. Свържете се лесно и бързо с
            продавача и намерете атрактивни предложения на по-ниски цени
            отколкото в магазина. Ако искате да продадете нещо, добавете бързо,
            лесно и безплатно обява в езикТок. Купувайте и продавайте с езикТок!
          </p>
          <NotificationPermission />
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 mt-4 max-w-screen-md mx-auto'>
          {cats.map((x) => (
            <Link passHref key={x.slug} className={x.className} href='/ads'>
              <div className='flex max-h-24 items-center overflow-hidden rounded-md shadow-lg '>
                <div className='heading flex h-24 min-w-24 w-24 items-center justify-center text-4xl text-white'>
                  {x.slug}
                </div>
                <div className='dark:bg-white bg-slate-900  rounded-r-md min-h-24  min-w-full'>
                  <h1 className='heading pl-2 text-3xl'>{x.title}</h1>
                  <p className='pl-2 text-sm'>{x.descr}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  return {
    props: { date: new Date().toString() }, // will be passed to the page component as props
  };
}

import Link from 'next/link';
import Twemoji from 'react-twemoji';

const CatButton = (item: {
  name: string;
  icon?: string;
  description?: string;
  color: string;
  slug: string;
  url: string;
}) => (
  <Link
    passHref
    className='flex  items-center overflow-hidden rounded-md bg-slate-900 shadow-lg dark:bg-white border-2 mb-1'
    href={item.url}
    style={{
      borderColor: `#${item.color}`,
    }}
  >
    {item.icon ? (
      <div
        className='heading flex h-14 w-14 min-h-14 items-center justify-center text-white relative'
        style={{
          backgroundColor: `#${item.color}`,
        }}
      >
        <Twemoji
          options={{
            className: 'emoji w-12 h-12',
          }}
        >
          {item.icon}
        </Twemoji>
      </div>
    ) : (
      <div className='min-h-8' />
    )}

    <div className='flex-1 px-2 font-bold leading-5 heading uppercase'>
      {item.name}
    </div>
  </Link>
);
export default CatButton;

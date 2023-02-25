import Link from 'next/link';
import TopNav from './TopNav';

const Header = ({ noNav }: { noNav: boolean }) => {
  return (
    <header className='navbar bg-base-100  dark:bg-gray-100 z-30'>
      <div className='block navbar-start sm:hidden'>
        <div className='dropdown'>
          <div tabIndex={0} className='btncircleone'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </div>
          </div>
          {!noNav && (
            <TopNav className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow dark:bg-white' />
          )}
        </div>
      </div>
      <div className='navbar-end sm:navbar-start'>
        <LogoTop />
      </div>
      <div className='navbar-end hidden justify-end sm:flex'>
        {!noNav && <TopNav className='flex m-0 self-end border-none p-0' />}
      </div>
    </header>
  );
};

export const LogoTop = () => (
  <Link className='btn-ghost btn flex sm:flex-row-reverse' href='/'>
    <div className='logotext background-animate bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400  text-transparent bg-clip-text'>
      ezikTok
    </div>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 23 20'
      className='float-right h-12 w-12'
    >
      <g fill='none' fillRule='evenodd' stroke='none' strokeWidth={1}>
        <g>
          <path
            fill='#E6E7E8'
            d='M8 3h13.5c.831 0 1.5.669 1.5 1.5v14c0 .831-.669 1.5-1.5 1.5H12L8 3z'
          />
          <path
            fill='#B20B0B'
            d='M12.16 14H23v5a1 1 0 01-1 1h-9.967l-.384-1.63-.479-3.223A1 1 0 0112.16 14z'
          />
          <path
            fill='#376AD7'
            d='M15.00672 17.0078L12.00001 20 11.29443 17.0013z'
          />
          <path fill='#3F7E0C' d='M10 8H23V14H10z' />
          <path
            fill='#518FF5'
            d='M15 17H1.5C.669 17 0 16.331 0 15.5v-14C0 .669.669 0 1.5 0H11l4 17z'
          />
          <path
            fill='#E6E7E8'
            d='M2.16 12V7.109h1.555V12H2.16zm5.32 0H5.874V9.82L3.684 5.66h1.718l1.235 2.588h.084L7.947 5.66h1.718L7.481 9.82V12zm2.15 0V7.109h1.555V12H9.629z'
          />
        </g>
      </g>
    </svg>
  </Link>
);

export default Header;

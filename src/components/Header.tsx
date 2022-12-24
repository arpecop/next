import Link from "next/link";
import TopNav from "./TopNav";

const Header = ({ noNav }: { noNav: boolean }) => {
  return (
    <header className='navbar  z-30 absolute'>
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
    <img src='/rudiXlabs.png' alt='' className='invert dark:invert-0' />
  </Link>
);

export default Header;

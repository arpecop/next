import { Auth } from '@aws-amplify/auth';

const SubForm = ({
  button,
  showSocial,
}: {
  left?: { text: string; href: string };
  button: string;
  showSocial?: boolean;
  showForgot?: boolean;
}) => (
  <div className='relative'>
    <div className='form-control mt-6'>
      <button className='btn btn-primary' type='submit'>
        {button}
      </button>
    </div>
    {showSocial && (
      <>
        <div className='divider font-light'>ИЛИ</div>
        <div className='form-control'>
          <button
            onClick={() => {
              Auth.federatedSignIn({
                provider: 'Google',
              } as any);
            }}
            className='btn border-none bg-white text-gray-900 hover:bg-white'
          >
            <svg
              width={24}
              height={24}
              xmlns='http://www.w3.org/2000/svg'
              className='mr-1'
            >
              <path
                fill='#4285F4'
                d='M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z'
              />
              <path
                fill='#34A853'
                d='M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24Z'
              />
              <path
                fill='#FBBC05'
                d='M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09Z'
              />
              <path
                fill='#EA4335'
                d='M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z'
              />
            </svg>
            <span className='mr-4'>Google</span>
          </button>
        </div>
        <div className='form-control mt-1'>
          <button
            onClick={() => {
              Auth.federatedSignIn({
                provider: 'Facebook',
              } as any);
            }}
            className='btn border-none bg-white text-gray-900 hover:bg-white'
          >
            <svg
              className='mr-1 fill-blue-700'
              width={24}
              height={24}
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
            </svg>
            Facebook
          </button>
        </div>
      </>
    )}
  </div>
);
export default SubForm;

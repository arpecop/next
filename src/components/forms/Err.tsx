import { useEffect, useState } from 'react';

const codes = {
  AuthError: 'Потребителското име не може да бъде празно',
  InvalidParameterException:
    'Неуспешно доставяне на код - Моля попълнете всички полета',
  CodeDeliveryFailureException:
    'Неуспешно доставяне на код - моля, проверете имейла си и опитайте отново',
  CodeMismatchException:
    'Несъответствие на кода - Моля, проверете кода и опитайте отново',
  InvalidPasswordException:
    'Невалидна парола - Моля, проверете паролата си и опитайте отново',
  NotAuthorizedException:
    'Не е упълномощен - не сте упълномощени за достъп до този ресурс',
  PasswordResetRequiredException:
    'Изисква се нулиране на паролата - Моля, нулирайте паролата си и опитайте отново',
  TooManyFailedAttemptsException:
    'Твърде много неуспешни опити - акаунтът ви е заключен от съображения за сигурност. Моля, опитайте отново по-късно',
  TooManyRequestsException:
    'Твърде много заявки - моля, опитайте отново по-късно',
  UnauthorizedException:
    'Неупълномощен - не сте упълномощени за достъп до този ресурс',
  UsernameExistsException:
    'Потребителското име съществува - Моля, изберете друго потребителско име и опитайте отново',
  UserNotConfirmedException:
    'Потребителят не е потвърден - Моля, потвърдете акаунта си и опитайте отново',
  UserNotFoundException:
    'Потребителят не е намерен - Моля, проверете потребителското име и опитайте отново',
} as { [key: string]: string };

const Err = ({ err }: any): JSX.Element => {
  const [close, setClose] = useState(false);
  useEffect(() => {
    setClose(false);
  }, [err]);
  return close ? (
    <></>
  ) : (
    <div
      className={"mx-auto-cols-auto stickyerror flex p-3 bg-pink-700 rounded-b-lg justify-center items-center"}
    >
      <div
        className='pr-3 absolute left-3  cursor-pointer'
        onClick={(): void => setClose(true)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 shrink-0 cursor-pointer stroke-current'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>
      <div>{codes[err.name] ? codes[err.name] : err.message}</div>
    </div>
  );
};

export default Err;

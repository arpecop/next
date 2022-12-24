/* eslint-disable react-hooks/exhaustive-deps */

//import Amplify from '@aws-amplify/auth';

import Amplify, { Auth } from '@aws-amplify/auth';

import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Err from '/components/forms/Err';
import SubForm from '/components/forms/SubForm';
import useLocalStorage from '/components/hooks/storage';

import Input from '/components/forms/inputs/Input';
import { API, graphqlOperation, mutations } from '/components/db';

interface State {
  action?:
    | 'signup'
    | 'signin'
    | 'forgot'
    | 'forgotchange'
    | 'reset'
    | 'confirmsignup'
    | 'signout';
  email: string;
  username: string;
  password: string;
  code: string;
  success: boolean;
  referer: string;
  emailcode: string;
  passwordagain: string;
}
export type User = {
  username: string;
  email: string;
  idToken: string;
  accessToken: string;
  refreshToken: string;
  id: string;
} | null;
export type UserRaw = {
  username: string;
  email: string;
  idToken: {
    jwtToken: string;
    payload: {
      sub: string;
      email: string;
    };
    accessToken: string;
    refreshToken: string;
    id: string;
  };
};
Amplify.configure({
  aws_project_region: 'eu-west-1',
  aws_cognito_identity_pool_id:
    'eu-west-1:2f394adb-6fe3-42e6-9cfb-e552b456a0a8',
  aws_cognito_region: 'eu-west-1',
  aws_user_pools_id: 'eu-west-1_R2tLVDqB0',
  aws_user_pools_web_client_id: '5k2d69fvijvdmpcml3a510eeqd',
  oauth: {
    domain: 'rudixops.auth.eu-west-1.amazoncognito.com',
    scope: ['email', 'openid', 'profile'],
    redirectSignIn: 'http://localhost:3000/auth/,https://eziktok.com/auth/',
    redirectSignOut: 'http://localhost:3000/auth/,https://eziktok.com/auth/',
    responseType: 'token',
  },
  federationTarget: 'COGNITO_USER_AND_IDENTITY_POOLS',
  aws_cognito_username_attributes: [],
  aws_cognito_social_providers: ['FACEBOOK', 'GOOGLE'],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: [],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 6,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
});

const AuthPage = ({ refer }: { refer: string }) => {
  const router = useRouter();
  const sekcia = router.query.sekcia as string;
  const x = sekcia ? sekcia : 'signin';

  const [section, setSection] = useState<string>(x);
  const [errx, setErr] = useState<{ message: string } | null>(null);
  const [state, setForm] = useState({} as State);
  const [user, setUser] = useLocalStorage<{
    username: string;
    sub: string;
  } | null>('user', null);

  async function initialise() {
    const data = await Auth.currentAuthenticatedUser();
    console.log(data);
    try {
      await API.graphql(
        graphqlOperation(mutations.createAd, {
          input: {
            id: data.attributes.sub,
            sortID: 'users',
            condition: 'USER',
            title: data.username,
            type: 'user',
            description:
              data.attributes.email ||
              data.signInUserSession.idToken.payload.email ||
              '',
          },
        }),
      );
      Router.push(refer);
      setUser({
        username: data.username,
        sub: data.attributes.sub,
      });
    } catch (e) {
      Router.push(refer);
      setUser({
        username: data.username,
        sub: data.attributes.sub,
      });
    }
  }

  useEffect(() => {
    setErr(null);
  }, [section]);

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    const inputs = Object.values(e.target)
      .filter(
        (c) =>
          typeof c.tagName === 'string' && c.tagName.toLowerCase() === 'input',
      )
      .reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {});

    const {
      action,
      username,
      password,
      email,
      emailcode,
    }: {
      action: string;
      username: string;
      password: string;
      email: string;
      emailcode: string;
    } = inputs;
    setForm({ ...state, ...inputs });
    switch (action) {
      case 'signin': {
        Auth.signIn(username, password)
          .then(async () => initialise())
          .catch((e) => setErr(e));
        break;
      }

      case 'signup': {
        Auth.signUp({
          username,
          password,
          attributes: {
            email,
          },
        })
          .then(async () => {
            setSection('confirmsignup');
          })
          .catch((e) => setErr(e));

        break;
      }
      case 'confirmsignup': {
        await Auth.confirmSignUp(username, emailcode)
          .then(
            async () =>
              await Auth.signIn(username, password).then(async () =>
                initialise(),
              ),
          )
          .catch((e) => setErr(e));

        break;
      }
      case 'forgot': {
        Auth.forgotPassword(username)
          .then(async () => {
            setSection('forgotchange');
          })
          .catch((e) => setErr(e));

        break;
      }
      case 'forgotchange': {
        Auth.forgotPasswordSubmit(username, emailcode, password)
          .then(async () => {
            setSection('signin');
          })
          .catch((e) => setErr(e));
        break;
      }
      default:
        break;
    }
  };

  return (
    <>
      {errx && <Err err={errx} />}
      <div className='flex justify-center items-center  flex-col  h-screen'>
        <form method='POST' onSubmit={onSubmit}>
          {section === 'signin' && (
            <>
              <Input
                name='username'
                placeholder='Потр. име'
                value={state.username}
                required={false}
              />
              <Input
                name='password'
                placeholder='Парола'
                type='password'
                required={false}
              />
              <Input
                name='action'
                type='hidden'
                value='signin'
                required={false}
              />
              <SubForm button='Вход' showForgot={true} showSocial={true} />
              <div className='z-40 mt-3  flex'>
                <a
                  onClick={() => setSection('signup')}
                  className='grow text-sm font-bold underline self-start cursor-pointer'
                >
                  Регистрация
                </a>

                <a
                  onClick={() => setSection('forgot')}
                  className='grow flex justify-end text-sm font-bold underline self-end cursor-pointer'
                >
                  Забравена Парола?
                </a>
              </div>
            </>
          )}

          {section === 'signup' && (
            <>
              <Input name='username' placeholder='Потр. име' />
              <Input name='email' placeholder='E-mail' />
              <Input name='password' placeholder='Парола' type='password' />
              <Input
                name='passwordagain'
                placeholder='Парола пак'
                type='password'
              />
              <Input name='action' type='hidden' value='signup' />

              <SubForm
                left={{
                  text: 'Вход',
                  href: '/auth/?section=signin',
                }}
                button='Регистрация'
                showSocial={true}
              />
              <div className='z-40 mt-3  flex'>
                <a
                  onClick={() => setSection('signin')}
                  className='grow text-sm font-bold underline self-start cursor-pointer'
                >
                  Вече имам регистрация
                </a>
              </div>
            </>
          )}
          {section === 'confirmsignup' && (
            <>
              <Input name='username' value={state.username} type='hidden' />
              <Input name='password' value={state.password} type='hidden' />
              <Input
                name='emailcode'
                placeholder='Въведи кода от електронната поща'
              />
              <Input name='action' type='hidden' value='confirmsignup' />
              <SubForm button='Потвърди ' />
            </>
          )}
          {section === 'forgot' && (
            <>
              <Input name='username' placeholder='Потр. име' />
              <Input name='action' type='hidden' value='forgot' />
              <SubForm button='Възстанови парола' />
            </>
          )}
          {section === 'forgotchange' && (
            <>
              <Input name='username' value={state.username} type='hidden' />
              <Input
                name='emailcode'
                type='number'
                placeholder='Въведи кода от електронната поща'
                value=''
              />
              <Input name='password' placeholder='Парола' type='password' />
              <Input
                name='passwordagain'
                placeholder='Парола пак'
                type='password'
              />
              <Input name='action' type='hidden' value='forgotchange' />
              <SubForm button='Смени Паролата' />
            </>
          )}
          {section === 'signout' && user && (
            <>
              <Input name='action' type='hidden' value='signout' />
              <SubForm button='Изход' />
            </>
          )}
        </form>
      </div>
    </>
  );
};

export async function getServerSideProps({ req }: any) {
  const ref = req.headers.referer;
  console.log(ref);
  if (
    !((ref.includes('auth') &&ref.includes('facebook') ) &&ref.includes('google'))
  ) {
    return {
      props: { refer: ref },
    };
  } else {
    return {
      props: { refer: '/' },
    };
  }
}

export default AuthPage;

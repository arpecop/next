import { UserType } from '../TopNav';

export const usernameformat = (user: UserType): string => {
  if (!user) {
    return 'nouser';
  }
  if (
    user.username?.includes('google_') ||
    user.username?.includes('facebook_')
  ) {
    return user.idToken?.payload?.email.split('@')[0] || 'nouser';
  }
  return user.username.toString();
};

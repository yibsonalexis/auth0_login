import Auth0, {PasswordRealmResponse} from 'react-native-auth0';
import {credentials} from '../auth0-credentials';
import {useAuthReducer} from './useAuthReducer';
const auth0 = new Auth0(credentials);

export const useAuth0 = () => {
  const {authState, authDispatch} = useAuthReducer();

  const getUserProfile = async (userCredentials: PasswordRealmResponse) => {
    try {
      const profile = await auth0.auth.userInfo({
        token: userCredentials.accessToken,
      });
      authDispatch({
        type: 'SIGN_IN',
        payload: {credentials: userCredentials, profile},
      });
    } catch (error) {
      authDispatch({
        type: 'ERROR',
        payload: {
          error:
            error?.json?.error_description ||
            'Error trying to get user profile information',
        },
      });
    }
  };

  const doLogin = async (username: string, password: string) => {
    try {
      authDispatch({
        type: 'IS_LOADING',
      });
      const userCredentials = await auth0.auth.passwordRealm({
        username,
        password,
        realm: 'Username-Password-Authentication',
        // scope: 'openid profile email',
        // audience: 'https://' + credentials.domain + '/userinfo',
      });
      getUserProfile(userCredentials);
    } catch (error) {
      authDispatch({
        type: 'ERROR',
        payload: {
          error: error?.json?.error_description || 'Error trying to login',
        },
      });
    }
  };

  const createUser = async (email: string, password: string) => {
    try {
      authDispatch({
        type: 'IS_LOADING',
      });
      const userResponse = await auth0.auth.createUser({
        email,
        password,
        connection: 'Username-Password-Authentication',
      });
      console.log('userResponse: ', userResponse);
    } catch (error) {
      authDispatch({
        type: 'ERROR',
        payload: {
          error:
            error?.json?.error_description || 'Error trying to create user',
        },
      });
    }
  };
  return {authState, createUser, doLogin};
};

import {useReducer} from 'react';
import {PasswordRealmResponse, UserInfo} from 'react-native-auth0';

export interface IAuthData {
  credentials: PasswordRealmResponse | null;
  error: string;
  isLoading: boolean;
  isSignout: boolean;
  profile: UserInfo | null;
}

const initialState: IAuthData = {
  credentials: null,
  error: '',
  isLoading: false,
  isSignout: false,
  profile: null,
};

type AuthAction =
  | {
      type: 'IS_LOADING';
    }
  | {
      type: 'ERROR';
      payload: {
        error: string;
      };
    }
  | {
      type: 'SIGN_IN';
      payload: {
        credentials: PasswordRealmResponse;
        profile: UserInfo;
      };
    }
  | {
      type: 'SIGN_OUT';
    };

function reducer(prevState: IAuthData, action: AuthAction): IAuthData {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...prevState,
        isLoading: true,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        isLoading: false,
        credentials: action.payload.credentials,
        profile: action.payload.profile,
      };
    case 'ERROR':
      return {
        ...prevState,
        isSignout: false,
        isLoading: false,
        error: action.payload.error,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        profile: null,
        credentials: null,
      };
  }
}

export const useAuthReducer = () => {
  const [authState, authDispatch] = useReducer(reducer, initialState);
  return {authState, authDispatch};
};

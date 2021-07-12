import React, {createContext, ReactNode, useContext} from 'react';
import {IAuthData} from '../hooks/useAuthReducer';
import {useAuth0} from '../hooks/useAuth0';

interface IAuthContextProps {
  authState: IAuthData;
  doLogin: (username: string, password: string) => Promise<void>;
  createUser: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext({} as IAuthContextProps);
export default AuthContext;

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({children}: Props) => {
  const {authState, doLogin, createUser} = useAuth0();
  return (
    <AuthContext.Provider value={{authState, doLogin, createUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

import {
  AuthActionContext,
  AuthDataContext,
  RequestActionContext,
  RequestDataContext,
  UserActionContext,
  UserDataContext,
} from './contexts';
import providerFactory from './utils/providerFactory';

export const AuthProvider = providerFactory(AuthDataContext, AuthActionContext);
export const UserProvider = providerFactory(UserDataContext, UserActionContext);
export const RequestProvider = providerFactory(RequestDataContext, RequestActionContext);

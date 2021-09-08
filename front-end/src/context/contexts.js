import { createContext, useContext } from 'react';

export const AuthDataContext = createContext();
export const AuthActionContext = createContext();
export const UserDataContext = createContext();
export const UserActionContext = createContext();
export const RequestDataContext = createContext();
export const RequestActionContext = createContext();
export const CustomRoleDataContext = createContext();
export const CustomRoleActionContext = createContext();

export const useAuthDataContext = () => useContext(AuthDataContext);
export const useAuthActionContext = () => useContext(AuthActionContext);
export const useUserDataContext = () => useContext(UserDataContext);
export const useUserActionContext = () => useContext(UserActionContext);
export const useRequestDataContext = () => useContext(RequestDataContext);
export const useRequestActionContext = () => useContext(RequestActionContext);
export const useCustomRoleDataContext = () => useContext(CustomRoleDataContext);
export const useCustomRoleActionContext = () => useContext(CustomRoleActionContext);

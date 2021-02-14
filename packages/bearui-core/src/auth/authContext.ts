import { createContext } from 'react';

import { AuthProvider } from '../types';

const defaultProvider: AuthProvider = {
    login: () => Promise.resolve(),
};

const AuthContext = createContext<AuthProvider>(defaultProvider);

AuthContext.displayName = 'AuthContext';

export default AuthContext;

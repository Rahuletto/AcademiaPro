import { createContext, useContext, useState } from 'react';
import { DayProvider } from './DayProvider';
import { UserProvider } from './UserProvider';

export function AppProvider({ children }: any) {
  return (
    <UserProvider>
      <DayProvider>{children}</DayProvider>
    </UserProvider>
  );
}

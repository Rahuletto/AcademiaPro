import { ReactNode } from 'react';
import { DayProvider } from './DayProvider';
import { UserProvider } from './UserProvider';

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <DayProvider>{children}</DayProvider>
    </UserProvider>
  );
}

import { ReactNode } from 'react';
import { DayProvider } from './DayProvider';
import { UserProvider } from './UserProvider';
import { TableProvider } from './TableProvider';

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <TableProvider>
        <DayProvider>{children}</DayProvider>
      </TableProvider>
    </UserProvider>
  );
}

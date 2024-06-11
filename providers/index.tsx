import { ReactNode } from 'react';
import { DayProvider } from './DayProvider';
import { UserProvider } from './UserProvider';
import { TableProvider } from './TableProvider';
import {CourseProvider } from './CourseProvider';
export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <CourseProvider>
      <TableProvider>
        <DayProvider>{children}</DayProvider>
      </TableProvider>
      </CourseProvider>
     </UserProvider>
  );
}

import type { ReactNode } from "react";
import { CourseProvider } from "./CourseProvider";
import { DayProvider } from "./DayProvider";
import { TableProvider } from "./TableProvider";
import { UserProvider } from "./UserProvider";
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

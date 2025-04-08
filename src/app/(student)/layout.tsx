import StudentHeader from "@/components/student/studentheader";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SessionProvider>
        <StudentHeader />
        {children}
      </SessionProvider>
    </div>
  );
};

export default layout;

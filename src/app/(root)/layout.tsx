import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session) redirect("/dashboard");
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;

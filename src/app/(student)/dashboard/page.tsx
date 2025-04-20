import StudentDashboard from "@/components/student/studentdasboard";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) redirect("/login");
  return (
    <div>
      <StudentDashboard />
    </div>
  );
};

export default Dashboard;

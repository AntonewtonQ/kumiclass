import StudentDashboard from "@/components/student/studentdasboard";

import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  return (
    <div>
      <StudentDashboard />
    </div>
  );
};

export default Dashboard;

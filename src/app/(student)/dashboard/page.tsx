import StudentDashboard from "@/components/student/studentdasboard";
import { auth } from "@/lib/auth";

import { createClient } from "@supabase/supabase-js";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Dashboard = async () => {
  /*const { data: session } = useSession();
  const [data, setData] = useState<any>(null);

  const { supabaseAccessToken } = session!;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    }
  );
  // Now you can query with RLS enabled.
  supabase
    .from("users")
    .select("*")
    .then(({ data }) => {
      console.log(data);
      setData(data);
    });
  console.log("session", session);
  console.log("supabaseAccessToken", supabaseAccessToken);
  console.log("supabase", supabase);*/

  const session = await auth();

  if (!session?.user) redirect("/login");
  return (
    <div>
      <StudentDashboard />
    </div>
  );
};

export default Dashboard;

import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function Dashboard() {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Logged in as: {user?.email}</p>
    </div>
  );
}

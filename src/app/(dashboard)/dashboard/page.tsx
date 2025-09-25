// import { authOptions } from "@/helpers/authOptions";
// import { getServerSession } from "next-auth";
import { getUserSession } from "@/helpers/getUserSession";

const DashboardHomePage = async () => {
  const session = await getUserSession();
  // const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="min-h-screen flex items-center justify-center p-6 w-full">
      <div>
        <h1>Welcome to Dashboard</h1>
        <h2>Hey {session?.user?.name}, Welcome Back</h2>
        <span>{session?.user?.email}</span>
      </div>
    </div>
  );
};

export default DashboardHomePage;

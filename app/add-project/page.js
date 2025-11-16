import { cookies } from "next/headers";
import AddProjectForm from "./components/AddProjectForm";
import { redirect } from "next/navigation";
import ProjectList from "./components/ProjectList";

export default async function Page() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin")?.value === "true";

  if (!isAdmin) {
    redirect("/login");
  }

  return (
    <div className="max-w-[1170px] mx-auto min-h-screen md:min-h-[calc(100vh-82.5px-65px)] px-6 py-[40px]">
      <AddProjectForm />
      <ProjectList />
    </div>
  );
}

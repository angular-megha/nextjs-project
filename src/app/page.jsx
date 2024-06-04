import UseCSSModule from "@/components/UseCSSModule";
import UseDataFetching from "@/components/UseDataFetching";
import UseImageModule from "@/components/UseImageModule";
import UseVideoModule from "@/components/UseVideoModule";
import AdminHeader from "@/components/header";
import LearnList from "@/components/linkList";
import ClientComponent from "@/components/useClientComp";
import ServerComponent from "@/components/useServerComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <h1>This is next demo 2</h1>
      {/* <LearnList /> */}
      {/* <AdminHeader /> */}
      {/* <ServerComponent /> */}
      {/* <ClientComponent /> */}
      {/* <UseCSSModule /> */}
      {/* <UseImageModule /> */}
      {/* <UseVideoModule /> */}

      {/* <UseVideoModule /> */}

      <UseDataFetching />

     
    </main>
  );
}

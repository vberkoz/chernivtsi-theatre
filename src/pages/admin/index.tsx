import { useSession } from "next-auth/react";
import HeaderNav from "@/components/HeaderNav";

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <div className="font-admin text-sm text-zinc-100 bg-zinc-900">
      <HeaderNav />
      {session && (
        <div className="p-8 text-lg h-[150vh] flex flex-col">
          <div>Головна панель</div>
          <div className="grow"></div>
          <div>Головна панель</div>
        </div>
      )}
    </div>
  );
}
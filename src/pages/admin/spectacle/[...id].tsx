import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

import NavLayout from "@/components/admin/NavLayout";
import pageParamToString from "@/utils/pageParamToString";
import List from "@/components/admin/List";
import AdminSpectacleForm from "@/components/admin/AdminSpectacleForm";

export default function Spectacle() {
  const router = useRouter();
  const itemId = pageParamToString(router.query.id);

  const items = trpc.spectacle.adminList.useQuery();
  const item = trpc.spectacle.byId.useQuery({ id: itemId });

  return (
    <NavLayout>
      <div className="flex flex-col border-r border-b border-zinc-800 bg-zinc-900">
        {!items.data ? (
          <div className="px-4 py-3">Завантаження...</div>
        ) : (
          <List items={items.data} />
        )}
      </div>
      <div className="col-span-2 md:h-screen px-4 py-3 overflow-y-scroll">
        {!item.data ? (
          <div>Завантаження...</div>
        ) : (
          <AdminSpectacleForm
            data={{
              title: item.data.title,
              id: item.data.id,
              imageUrl: item.data.imageUrl,
              author: item.data.author,
              type: item.data.type,
              duration: item.data.duration,
              description: item.data.description,
              audience: item.data.audience,
              published: item.data.published,
              events: item.data.events,
            }}
          />
        )}
      </div>
    </NavLayout>
  );
}

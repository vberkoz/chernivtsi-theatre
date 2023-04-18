import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

import NavLayout from "@/components/admin/NavLayout";
import pageParamToString from "@/utils/pageParamToString";
import List from "@/components/admin/List";

export default function Worker() {
  const router = useRouter();
  const itemId = pageParamToString(router.query.id);

  const items = trpc.worker.list.useQuery();
  const item = trpc.worker.byId.useQuery({ id: itemId });

  return (
    <NavLayout>
      <div className="flex flex-col border-r border-zinc-800 bg-zinc-900">
        {!items.data ? (
          <div className="px-4 py-3">Завантаження...</div>
        ) : (
          <List items={items.data} />
        )}
      </div>
      <div className="col-span-2 h-screen px-4 py-3">
        {!item.data ? (
          <div>Завантаження...</div>
        ) : (
          <>
            <div className="text-2xl">{item.data.name}</div>
            <div>{item.data.id}</div>
          </>
        )}
      </div>
    </NavLayout>
  );
}

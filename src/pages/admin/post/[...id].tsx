import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

import NavLayout from "@/components/admin/NavLayout";
import pageParamToString from "@/utils/pageParamToString";
import List from "@/components/admin/List";

export default function Post() {
  const router = useRouter();
  const itemId = pageParamToString(router.query.id);

  const items = trpc.post.list.useQuery();
  const item = trpc.post.byId.useQuery({ id: itemId });

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
            <div className="text-2xl">{item.data.title}</div>
            <div>{item.data.id}</div>
          </>
        )}
      </div>
    </NavLayout>
  );
}

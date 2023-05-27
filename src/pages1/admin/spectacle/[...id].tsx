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
          <>
            <List items={items.data} />
            <div className="grow"></div>
            <button
              onClick={() => router.push("/admin/spectacle/add")}
              className="px-4 py-3 mt-14 text-left outline-none focus:ring-2 ring-inset ring-zinc-100 flex cursor-pointer text-zinc-100 bg-blue-600 hover:bg-blue-700"
            >
              <span className="pr-4">Додати виставу</span>
              <div className="grow"></div>
              <svg
                fill="currentColor"
                width="28"
                height="28"
                viewBox="0 0 32 32"
              >
                <path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                <title>Add</title>
              </svg>
            </button>
          </>
        )}
      </div>
      <div className="col-span-2 md:h-screen px-4 py-3 overflow-y-scroll">
        {!item.data ? (
          <AdminSpectacleForm
            data={{
              title: "",
              id: "",
              imageUrl: "",
              author: "",
              type: "",
              duration: "",
              description: "",
              forChildren: false,
              published: false,
              events: [],
            }}
          />
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
              forChildren: item.data.forChildren,
              published: item.data.published,
              events: item.data.events,
            }}
          />
        )}
      </div>
    </NavLayout>
  );
}

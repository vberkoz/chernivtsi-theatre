import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

import NavLayout from "@/components/admin/NavLayout";
import List from "@/components/admin/List";

export default function Spectacle() {
  const spectacles = trpc.spectacle.list.useQuery();
  
  const router = useRouter();
  const { id } = router.query;

  let spectacleId: string = "";
  switch (typeof id) {
    case "string":
      spectacleId = id;
      break;

    case "object":
      spectacleId = id[0];
      break;

    case "undefined":
      spectacleId = "";
      break;

    default:
      spectacleId = "";
      break;
  }

  const spectacle = trpc.spectacle.byId.useQuery({ id: spectacleId });

  if (!spectacles.data) {
    return <div className="px-4 py-3">Loading...</div>;
  }

  return (
    <NavLayout>
      <div className="grid grid-cols-3">
        <div className="flex flex-col border-r border-zinc-800 bg-zinc-900">
          <List items={spectacles.data} />
        </div>
        <div className="col-span-2 h-screen px-4 py-3">
          <div className="text-2xl">
            {(spectacle?.data?.title && spectacle?.data?.title)}
          </div>
          <div>{spectacle?.data?.id}</div>
        </div>
      </div>
    </NavLayout>
  );
}

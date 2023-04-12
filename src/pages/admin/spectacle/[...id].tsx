import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

import NavLayout from "@/components/admin/NavLayout";
import pageParamToString from "@/utils/pageParamToString";
import ListLayout from "@/components/admin/ListLayout";

export default function Spectacle() {
  const router = useRouter();
  const itemId = pageParamToString(router.query.id);

  const items = trpc.spectacle.list.useQuery();
  const item = trpc.spectacle.byId.useQuery({ id: itemId });

  const data = {
    items: items.data,
    item: item.data,
  };

  return (
    <NavLayout>
      <ListLayout data={data} />
    </NavLayout>
  );
}

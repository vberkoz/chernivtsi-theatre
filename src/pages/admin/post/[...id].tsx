import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

import NavLayout from "@/components/admin/NavLayout";
import pageParamToString from "@/utils/pageParamToString";
import ListLayout from "@/components/admin/ListLayout";

export default function Post() {
  const router = useRouter();
  const itemId = pageParamToString(router.query.id);

  const items = trpc.post.list.useQuery();
  const item = trpc.post.byId.useQuery({ id: itemId });

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

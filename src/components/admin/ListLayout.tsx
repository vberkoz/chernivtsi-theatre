import { Spectacle } from "@/pages/admin/[page]/[id]";
import List from "./List";

type Props = {
  data: {
    items: Spectacle[];
    currentItem: Spectacle;
  };
};

export default function ListLayout({ data }: Props) {
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col border-r border-zinc-800 bg-zinc-900">
        <List items={data.items} />
      </div>
      <div className="col-span-2 h-screen px-4 py-3">
        <div className="text-2xl">{data.currentItem.title}</div>
        <div>{data.currentItem.id}</div>
      </div>
    </div>
  );
}

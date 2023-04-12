import List from "./List";

export type Item = {
  id: string | number;

  title?: string;
  name?: string;
  spectacle?: {
    title: string;
  }
  
  href: string;
};

type Props = {
  data: {
    items: Item[] | undefined;
    item: Item | null | undefined;
  };
};

export default function ListLayout({ data }: Props) {
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col border-r border-zinc-800 bg-zinc-900">
        {!data.items ? (
          <div className="px-4 py-3">Loading...</div>
        ) : (
          <List items={data.items} />
        )}
      </div>
      <div className="col-span-2 h-screen px-4 py-3">
        {!data.item ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="text-2xl">{data?.item?.title || data?.item?.name }</div>
            <div>{data?.item?.id}</div>
          </>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";

type Props = {
  data: {
    date: string;
    type: string;
    title: string;
    excerpt: string;
    containerClass: string;
  };
};

export default function Post({ data }: Props) {
  return (
    <Link
      href="#"
      className={`
      flex flex-col justify-between 
      border-b ${data.containerClass} border-zinc-800 p-4 group
      `}
    >
      <div className="flex flex-row">
        <p className="text-red-900 mr-4">{data.date}</p>
        <p className="font-thin">{data.type}</p>
      </div>
      <div className="grow min-h-[5vh]"></div>
      <div>
        <h2 className="font-serif text-2xl my-4 group-hover:text-red-600">{data.title}</h2>
        <p className="font-thin">{data.excerpt}</p>
      </div>
    </Link>
  );
}

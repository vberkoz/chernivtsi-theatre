import Link from "next/link";
import { format } from "date-fns";
import { uk } from "date-fns/locale";

type Props = {
  data: {
    date: Date;
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
        <p className="text-red-900 mr-4">{format(data.date, "y-MM-dd", { locale: uk })}</p>
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

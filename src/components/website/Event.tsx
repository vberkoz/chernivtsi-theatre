import Link from "next/link";
import { format } from "date-fns";
import { uk } from "date-fns/locale";

type Props = {
  data: {
    type: string;
    title: string;
    image: string;
    href: string;
    date: Date;
    time: Date;
    topOverlayClass: string;
  };
};

export default function Event({ data }: Props) {
  return (
    <Link
      href={data.href}
      className={`p-4 text-center border-b ${data.topOverlayClass} border-zinc-800 h-[50vh] flex flex-col group`}
    >
      <div className="font-thin">
        <p>{format(data.date, "dd MMMM", { locale: uk })}</p>
        <p>{format(data.date, "HH:mm", { locale: uk })}</p>
      </div>
      <div className="grow min-h-[8px]"></div>
      <div
        className="
        m-auto p-2
        flex flex-col items-center 
        border border-zinc-800 rounded-t-full group-hover:bg-red-600 outline-none
        landscape:w-[calc(8vw+20px)] landscape:h-[calc(20vh+10px)]
        portrait:w-[calc(25vw+20px)] portrait:h-[calc(20vh+10px)]
        "
      >
        <div
          className="
          rounded-t-full ring-1 ring-zinc-800 
          landscape:w-[8vw] landscape:h-[20vh]
          portrait:w-[25vw] portrait:h-[20vh]
          bg-[length:150%] bg-black
          "
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="grow min-h-[8px]"></div>
      <div className="">
        <p className="font-thin">{data.type}</p>
        <p className="font-serif uppercase text-2xl group-hover:text-red-600">
          {data.title}
        </p>
      </div>
    </Link>
  );
}

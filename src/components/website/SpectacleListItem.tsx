import Link from "next/link";

type Props = {
  data: {
    type: string;
    title: string;
    imageUrl: string;
    publicHref: string;
    author: string;
  };
};

export default function SpectacleListItem({ data }: Props) {
  return (
    <Link
      href={data.publicHref}
      className="p-4 text-center border-b border-zinc-800 h-[50vh] flex flex-col group"
    >
      <div className="font-thin">{data.type}</div>
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
          rounded-t-full
          landscape:w-[8vw] landscape:h-[20vh]
          portrait:w-[25vw] portrait:h-[20vh]
          bg-[length:150%] bg-black
          "
          style={{
            backgroundImage: `url(${data.imageUrl})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="">
        <p className="font-serif uppercase text-2xl group-hover:text-red-600">
          {data.title}
        </p>
        <p className="font-thin">{data.author}</p>
      </div>
    </Link>
  );
}
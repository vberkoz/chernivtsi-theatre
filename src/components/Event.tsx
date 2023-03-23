import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  data: {
    type: string;
    title: string;
    image: StaticImageData;
    href: string;
    date: string;
    time: string;
    rightBorder: boolean;
  };
};

export default function Event({ data }: Props) {
  return (
    <div
      className={`p-4 text-center border-b ${
        data.rightBorder && "md:border-r"
      } border-zinc-800 h-[50vh] flex flex-col`}
    >
      <div className="font-thin">
        <p>{data.date}</p>
        <p>{data.time}</p>
      </div>
      <div className="grow min-h-[8px]"></div>
      <Link
        href={data.href}
        className="
        m-auto p-2
        flex flex-col items-center 
        border border-zinc-800 rounded-t-full hover:bg-red-700 outline-none
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
            backgroundImage: `url(${data.image.src})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Link>
      <div className="grow min-h-[8px]"></div>
      <div className="">
        <p className="font-thin">{data.type}</p>
        <p className="font-serif uppercase text-2xl">{data.title}</p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { StaticImageData } from "next/image";

type Props = {
  data: {
    typeRow1: string;
    typeRow2?: string;
    title: string;
    date: string;
    href: string;
    image: StaticImageData;
    doubleWidth: boolean;
    topOverlayClass: string;
  };
};

export default function Premiere({ data }: Props) {
  return (
    <Link
      href={data.href}
      className={`col-span-1 group ${
        data.doubleWidth ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      <div
        className={`absolute w-full ${
          data.doubleWidth ? "lg:w-[50%]" : "md:w-[50%] lg:w-[25%]"
        } h-[50vh]`}
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
        }}
      ></div>

      <div
        className={`absolute w-full ${
          data.doubleWidth ? "lg:w-[50%]" : "md:w-[50%] lg:w-[25%]"
        } h-[50vh] border-b border-zinc-800 ${data.topOverlayClass}`}
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
        }}
      ></div>

      <div
        className={`flex p-4 w-full h-[50vh] bg-[length:150%] ${
          data.doubleWidth ? "lg:bg-[length:100%]" : "lg:bg-[length:175%]"
        } `}
        style={{
          backgroundImage: `url(${data.image.src})`,
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col z-10">
          <p className="font-sans font-thin text-lg text-zinc-100">
            <span>{data.typeRow1} </span>
            {data.typeRow1 && (
              <span className="whitespace-nowrap">{data.typeRow2}</span>
            )}
          </p>
          <div className="font-serif text-4xl text-zinc-100 uppercase group-hover:text-red-700">
            {data.title}
          </div>
          <div className="grow"></div>
          <p className="font-sans font-thin text-lg text-zinc-100 mb-2">
            {data.date}
          </p>
          <button className="font-serif text-zinc-100 uppercase bg-red-900 hover:bg-red-600 rounded-full py-1 px-4 max-w-fit">
            Придбати Квиток
          </button>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Props = {
  data: {
    title: string;
    position: string;
    image: StaticImageData;
    topOverlayClass: string;
  };
};

export default function Staff({ data }: Props) {
  return (
    <Link
    href="#" 
      className={`
      col-span-1 lg:col-span-1 p-7 
      flex flex-col items-center 
      text-zinc-100 
      bg-black 
      border-b border-zinc-800
      group
      ${data.topOverlayClass}
      `}
    >
      <p className="font-sans font-thin text-lg">Актори та Персонал</p>
      <div className="grow min-h-[8px]"></div>

      <div
        className="flex flex-col items-center border border-zinc-800 md:w-[50%] rounded-full p-2 group-hover:bg-red-700"
      >
        <Image
          src={data.image.src}
          alt={data.title}
          width={200}
          height={200}
          className="rounded-full ring-1 ring-zinc-800"
        />
      </div>
      <div className="grow min-h-[8px]"></div>
      <p className="font-serif text-xl lg:text-2xl uppercase mb-2 text-center group-hover:text-red-700">
        {data.title}
      </p>
      <p className="font-sans font-thin text-lg">{data.position}</p>
    </Link>
  );
}

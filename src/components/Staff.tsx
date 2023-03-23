import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Props = {
  data: {
    title: string;
    position: string;
    image: StaticImageData;
  };
};

export default function Staff({ data }: Props) {
  return (
    <div 
      className="
      col-span-1 lg:col-span-1 p-7 
      flex flex-col items-center 
      text-zinc-100 
      bg-black 
      border-b md:border-r border-zinc-800
      "
    >
      <p className="font-sans font-thin text-lg">Актори та Персонал</p>
      <div className="grow min-h-[8px]"></div>

      <Link
        href="#"
        className="flex flex-col items-center border border-zinc-800 md:w-[50%] rounded-full p-2 hover:bg-red-700"
      >
        <Image
          src={data.image.src}
          alt={data.title}
          width={200}
          height={200}
          className="rounded-full ring-1 ring-zinc-800"
        />
      </Link>
      <div className="grow min-h-[8px]"></div>
      <p className="font-serif font-semibold text-3xl lg:text-4xl uppercase mb-2 text-center">
        {data.title}
      </p>
      <p className="font-sans font-thin text-lg">{data.position}</p>
    </div>
  );
}

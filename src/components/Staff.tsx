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
    <div className="col-span-1 lg:col-span-1 bg-gradient-to-t from-yellow-700 to-yellow-400 flex flex-col items-center p-7">
      <p className="font-sans text-lg text-zinc-900">Актори та Персонал</p>
      <div className="grow min-h-[8px]"></div>

      <Link
        href="#"
        className="flex flex-col items-center border border-zinc-900 md:w-[50%] rounded-full p-2 hover:bg-red-700"
      >
        <Image
          src={data.image.src}
          alt={data.title}
          width={200}
          height={200}
          className="rounded-full ring-1 ring-zinc-900"
        />
      </Link>
      <div className="grow min-h-[8px]"></div>
      <p className="font-serif font-semibold text-3xl lg:text-4xl text-zinc-900 uppercase mb-2 text-center">
        {data.title}
      </p>
      <p className="font-sans text-lg text-zinc-900">{data.position}</p>
    </div>
  );
}

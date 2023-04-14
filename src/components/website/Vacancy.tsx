import Link from "next/link";

type Props = {
  data: {
    title: string;
    href: string;
    image: string;
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
          backgroundImage: `url(${data.image})`,
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col z-10">
          <div className={`font-serif text-xl text-zinc-100 uppercase group-hover:text-red-700 ${data.doubleWidth && "md:w-1/2"}`}>
            {data.title}
          </div>
        </div>
      </div>
    </Link>
  );
}

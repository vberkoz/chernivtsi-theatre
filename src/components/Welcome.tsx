import Link from "next/link";

import welcome from "public/welcome.webp";
import logo from "public/logo.png";

export default function Welcome() {
  return (
    <div>
      <div
        className="border-b border-zinc-800 w-full h-[calc(75vh-60px)] bg-[length:300%] sm:bg-[length:200%] md:bg-[length:150%] lg:bg-[length:100%]"
        style={{
          backgroundImage: `url(${welcome.src})`,
          backgroundPosition: "center",
        }}
      ></div>

      <div
        className="absolute top-[60px] w-full h-[calc(75vh-60px)]"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
        }}
      ></div>
      
      <div
        className="absolute top-[60px] w-full h-[calc(75vh-60px)] bg-[length:200%] sm:bg-[length:150%] md:bg-[length:100%] lg:bg-[length:80%] xl:bg-[length:60%]"
        style={{
          backgroundImage: `url(${logo.src})`,
          backgroundPosition: "center 25%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

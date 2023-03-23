import Layout from "@/components/Layout";
import Welcome from "@/components/Welcome";

import nightOnTheMeadow from "public/nightOnTheMeadow.webp";
import gabrielle from "public/gabrielle.webp";
import auntyForAMillion from "public/auntyForAMillion.webp";
import betrayMe from "public/betrayMe.webp";
import weekendForThree from "public/weekendForThree.webp";

import volodymyrShnayder from "public/volodymyrShnayder.webp";
import Premiere from "@/components/Premiere";
import Staff from "@/components/Staff";
import Event from "@/components/Event";

export default function Home() {
  return (
    <Layout>
      <Welcome />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Premiere
          data={{
            typeRow1: "комедія",
            title: "Габріель",
            date: "24 Грудня - 7 Січня",
            href: "#",
            image: gabrielle,
            doubleWidth: true,
            rightBorder: true,
          }}
        />

        <Premiere
          data={{
            typeRow1: "драматична поема",
            title: "Ніч на полонині",
            date: "1 - 5 Лютого",
            href: "#",
            image: nightOnTheMeadow,
            doubleWidth: false,
            rightBorder: true,
          }}
        />

        <Premiere
          data={{
            typeRow1: "комедія на 2 дії",
            title: "Вікенд на трьох",
            date: "1 - 5 Лютого",
            href: "#",
            image: weekendForThree,
            doubleWidth: false,
            rightBorder: false,
          }}
        />

        <Staff
          data={{
            title: "Володимир Шнайдер",
            position: "Головний Диригент",
            image: volodymyrShnayder,
          }}
        />

        <Premiere
          data={{
            typeRow1: "дикий експеримент над любов’ю",
            typeRow2: "на 2 дії",
            title: "Зрадь мене",
            date: "1 - 5 Лютого",
            href: "#",
            image: betrayMe,
            doubleWidth: false,
            rightBorder: true,
          }}
        />

        <Premiere
          data={{
            typeRow1: "комедія в стилі рок-н-рол",
            title: "Тітонька на мільйон",
            date: "24 Грудня - 7 Січня",
            href: "#",
            image: auntyForAMillion,
            doubleWidth: true,
            rightBorder: false,
          }}
        />

        <div className="py-4 font-serif bg-black border-b border-zinc-800 flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-4">
          <div className="uppercase">Найближчі вистави</div>
        </div>
        <Event
          data={{
            type: "комедія",
            title: "Габріель",
            image: gabrielle,
            href: "#",
            date: "18 Січня",
            time: "19:00",
            rightBorder: true,
          }}
        />
        <Event
          data={{
            type: "драматична поема",
            title: "Ніч на полонині",
            image: nightOnTheMeadow,
            href: "#",
            date: "19 Січня",
            time: "19:00",
            rightBorder: true,
          }}
        />
        <Event
          data={{
            type: "комедія",
            title: "Габріель",
            image: gabrielle,
            href: "#",
            date: "20 Січня",
            time: "18:00",
            rightBorder: true,
          }}
        />
        <Event
          data={{
            type: "комедія на 2 дії",
            title: "Вікенд на трьох",
            image: weekendForThree,
            href: "#",
            date: "20 Січня",
            time: "20:00",
            rightBorder: false,
          }}
        />
      </div>
    </Layout>
  );
}

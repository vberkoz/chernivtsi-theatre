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

        <Staff data={{
          title: "Володимир Шнайдер",
          position: "Головний Диригент",
          image: volodymyrShnayder,
        }} />

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
      </div>
    </Layout>
  );
}

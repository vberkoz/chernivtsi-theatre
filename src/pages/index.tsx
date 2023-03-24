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
import Partners from "@/components/Partners";
import Post from "@/components/Post";

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
            topOverlayClass: "md:border-r",
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
            topOverlayClass: "md:border-r-0 lg:border-r",
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
            topOverlayClass: "md:border-r lg:border-r-0",
          }}
        />

        <Staff
          data={{
            title: "Володимир Шнайдер",
            position: "Головний Диригент",
            image: volodymyrShnayder,
            topOverlayClass: "md:border-r-0 lg:border-r",
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
            topOverlayClass: "md:border-r",
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
            topOverlayClass: "",
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
            topOverlayClass: "md:border-r",
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
            topOverlayClass: "md:border-r-0 lg:border-r",
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
            topOverlayClass: "md:border-r",
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
            topOverlayClass: "",
          }}
        />

        <Partners />

        <div className="py-4 font-serif bg-black border-b border-zinc-800 flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-4">
          <div className="uppercase">Новини</div>
        </div>
        <Post data={{
          date: "2022-09-12",
          type: "Зустріч",
          title: "Сучасний театр в Україні",
          excerpt: "Хто ми? Звідки? Чи куди йдемо? Сергій Винниченко театральний блогер, автор порталу “Театральна риболовля” 18 червня, 12:00, фоє театру, 2-й поверх. Вхід вільний.",
          containerClass: "md:border-r",
        }} />
        <Post data={{
          date: "2022-12-22",
          type: "Оголошення",
          title: "До зустрічі у новому театральному сезоні",
          excerpt: "Шановні глядачі, до зустрічі у новому 91-му театральному сезоні. З питань екскурсії, звертайтеся за телефоном (0372) 52-46-62.",
          containerClass: "md:border-r-0 lg:border-r",
        }} />
        <Post data={{
          date: "2022-12-22",
          type: "Зустріч",
          title: "Театральна імпреза “Білий птах Буковини”",
          excerpt: "15 червня, 11:00, театральна імпреза до 80-ї річниці з дня народження видатного українського кіномитця Івана Миколайчука. Театр просто неба в музеї-садибі села Чорториї. Вхід вільний.",
          containerClass: "md:border-r",
        }} />
        <Post data={{
          date: "2022-11-22",
          type: "Оголошення",
          title: "Відміна вистав у жовтні 2022",
          excerpt: "Шановні глядачі, повідомляємо про зміни в репертуарі на жовтень 2022 року, вистави з 7 по 10 жовтня - скасовано. Приносимо вибачання за незручності і дякуємо за розуміння.",
          containerClass: "md:border-r-0 lg:border-r",
        }} />
        
      </div>
    </Layout>
  );
}

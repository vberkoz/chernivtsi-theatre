import Link from "next/link";
import { useState } from "react";

import Logo from "./Logo";

const primaryItems: { en: string; uk: string }[] = [
  { en: "Affiche", uk: "Афіша" },
  { en: "Repertoire", uk: "Репертуар" },
  { en: "Artists & Staff", uk: "Актори та Персонал" },
  { en: "News", uk: "Новини" },
];

const secondaryItems = [
  { en: "Festival", uk: "Фестиваль" },
  { en: "Vacancies", uk: "Вакансії" },
  { en: "Contact Us", uk: "Контакти" },
  { en: "About Us", uk: "Про Нас" },
];

const menu = {
  open: { en: "MENU", uk: "МЕНЮ" },
  close: { en: "CLOSE", uk: "ЗАКРИТИ" },
}

export default function Menu() {
  const [opened, setOpened] = useState(false);
  const [lang, setLang] = useState("en");

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const toggleLang = () => {
    lang === "en" ? setLang("uk") : setLang("en");
  };

  return (
    <div className="font-serif sticky top-0 bg-black">
      <div
        className={`${
          opened ? "flex" : "hidden"
        } absolute flex-col top-[60px] w-full h-[calc(100vh-60px)] bg-black`}
      >
        <div className="grid lg:grid-cols-4 h-full">
          <div className="hidden lg:block"></div>
          <div className="col-span-3 flex flex-col justify-around">
            <div className="flex flex-col">
              {primaryItems.map((item, key) => (
                <Link
                  key={key}
                  href="#"
                  className="uppercase text-5xl pl-4 py-1"
                >
                  {lang === "en" ? item.en : item.uk}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              {secondaryItems.map((item, key) => (
                <Link
                  key={key}
                  href="#"
                  className="uppercase pl-4 py-1 text-2xl"
                >
                  {lang === "en" ? item.en : item.uk}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center lg:hidden">
        <div className="flex w-24 pl-4">
          <button
            className="uppercase hover:cursor-pointer text-left"
            onClick={toggleLang}
          >
            {lang === "en" ? "uk" : "en"}
          </button>
        </div>
        <div className="grow">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <button
          className="uppercase p-4 mr-2 hover:cursor-pointer"
          onClick={toggleMenu}
        >
          {opened ? (lang === "en" ? menu.close.en : menu.close.uk) : (lang === "en" ? menu.open.en : menu.open.uk)}
        </button>
      </div>

      <div className="hidden border-b border-zinc-800 lg:flex">
        <Link href="/" className="flex items-center pl-4">
          <Logo />
        </Link>
        <div className="grow"></div>
        <div className="flex items-center">
          {primaryItems.map((item, key) => (
            <Link
              key={key}
              href="#"
              className={`${opened ? "hidden" : "block"} uppercase p-4 hover:text-red-700`}
            >
              {lang === "en" ? item.en : item.uk}
            </Link>
          ))}
        </div>
        <div className="grow"></div>
        <button
          className="uppercase p-4 hover:cursor-pointer hover:text-red-700"
          onClick={toggleLang}
        >
          {lang === "en" ? "uk" : "en"}
        </button>
        <button
          className="uppercase p-4 mr-2 hover:cursor-pointer hover:text-red-700"
          onClick={toggleMenu}
        >
          {opened ? (lang === "en" ? menu.close.en : menu.close.uk) : (lang === "en" ? menu.open.en : menu.open.uk)}
        </button>
      </div>
    </div>
  );
}

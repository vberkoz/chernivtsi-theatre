import Link from "next/link";
import { useState } from "react";
import useDarkMode from "@/hooks/useDarkMode";

import Logo from "./Logo";

const primaryItems: { en: string; uk: string }[] = [
  { en: "Repertoire", uk: "Репертуар" },
  { en: "Affiche", uk: "Афіша" },
  { en: "Artists & Staff", uk: "Актори та Персонал" },
  { en: "News", uk: "Новини" },
];
const secondaryItems = [
  { en: "About Us", uk: "Про Нас" },
  { en: "Festival", uk: "Фестиваль" },
  { en: "Vacancies", uk: "Вакансії" },
  { en: "Contact Us", uk: "Контакти" },
];

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
    <div className="font-serif">
      <div
        className={`${
          opened ? "flex" : "hidden"
        } absolute flex-col top-[60px] w-full h-[calc(100vh-60px)] bg-gray-100 dark:bg-gray-900`}
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
            {lang}
          </button>
          <ToggleDarkMode />
        </div>
        <div className="grow">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <button
          className="uppercase p-4 mr-2 hover:cursor-pointer w-24"
          onClick={toggleMenu}
        >
          {opened ? "CLOSE" : "MENU"}
        </button>
      </div>

      <div className="lg:grid lg:grid-cols-4 hidden">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="col-span-3 flex items-center">
          {primaryItems.map((item, key) => (
            <Link
              key={key}
              href="#"
              className={`${opened ? "hidden" : "block"} uppercase p-4`}
            >
              {lang === "en" ? item.en : item.uk}
            </Link>
          ))}
          <div className="grow"></div>
          <ToggleDarkMode />
          <button
            className="uppercase p-4 hover:cursor-pointer"
            onClick={toggleLang}
          >
            {lang}
          </button>
          <button
            className="uppercase p-4 mr-2 hover:cursor-pointer w-24"
            onClick={toggleMenu}
          >
            {opened ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>
    </div>
  );
}

const ToggleDarkMode = () => {
  const [colorTheme, setTheme] = useDarkMode();
  if (colorTheme === "light") {
    return (
      <button onClick={() => setTheme("light")} className="cursor-pointer p-3">
        <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
          <path d="M15 2H17V7H15z"></path>
          <path
            d="M21.668 6.854H26.625999999999998V8.854H21.668z"
            transform="rotate(-45 24.147 7.853)"
          ></path>
          <path d="M25 15H30V17H25z"></path>
          <path
            d="M23.147 21.668H25.147V26.625999999999998H23.147z"
            transform="rotate(-45 24.147 24.146)"
          ></path>
          <path d="M15 25H17V30H15z"></path>
          <path
            d="M5.375 23.147H10.333V25.147H5.375z"
            transform="rotate(-45 7.853 24.146)"
          ></path>
          <path d="M2 15H7V17H2z"></path>
          <path
            d="M6.854 5.375H8.854V10.333H6.854z"
            transform="rotate(-45 7.854 7.853)"
          ></path>
          <path d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"></path>
          <title>Light</title>
        </svg>
      </button>
    );
  } else {
    return (
      <button onClick={() => setTheme("dark")} className="cursor-pointer p-3">
        <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
          <path d="M13.5025,5.4136A15.0755,15.0755,0,0,0,25.096,23.6082a11.1134,11.1134,0,0,1-7.9749,3.3893c-.1385,0-.2782.0051-.4178,0A11.0944,11.0944,0,0,1,13.5025,5.4136M14.98,3a1.0024,1.0024,0,0,0-.1746.0156A13.0959,13.0959,0,0,0,16.63,28.9973c.1641.006.3282,0,.4909,0a13.0724,13.0724,0,0,0,10.702-5.5556,1.0094,1.0094,0,0,0-.7833-1.5644A13.08,13.08,0,0,1,15.8892,4.38,1.0149,1.0149,0,0,0,14.98,3Z"></path>
          <title>Dark</title>
        </svg>
      </button>
    );
  }
};

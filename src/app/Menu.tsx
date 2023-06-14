"use client"

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";


const primaryItems = ["Афіша", "Репертуар", "Актори та Персонал", "Новини"];
const secondaryItems = ["Фестиваль", "Вакансії", "Контакти", "Про Нас"];

export default function Menu() {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <div className="font-serif sticky top-0 bg-black z-20">
      <div
        className={`${
          opened ? "flex" : "hidden"
        } absolute flex-col top-[60px] w-full h-[calc(100vh-60px)] bg-black`}
      >
        <div className="grid lg:grid-cols-4 h-full">
          <div className="hidden lg:block"></div>

          <div className="col-span-3 flex flex-col px-4">
            <div className="flex flex-col mb-4">
              {primaryItems.map((item, key) => (
                <Link
                  key={key}
                  href="#"
                  className="uppercase text-5xl py-2 hover:text-red-700"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex flex-col">
              {secondaryItems.map((item, key) => (
                <Link
                  key={key}
                  href="#"
                  className="uppercase text-2xl py-1 hover:text-red-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center lg:hidden border-b border-zinc-800">
        <div className="flex w-32 pl-4">
          <Link href="/">
            <Logo />
          </Link>
          <div className="grow"></div>
        </div>

        <div className="grow"></div>

        <div className="flex w-32">
          <div className="grow"></div>
          <button
            className="uppercase hover:cursor-pointer py-4 pl-4 pr-7"
            onClick={toggleMenu}
          >
            {opened ? "ЗАКРИТИ" : "МЕНЮ"}
          </button>
        </div>
      </div>

      <div className="hidden border-b border-zinc-800 lg:flex">
        <div className="flex items-center w-32">
          <Link href="/" className="pl-4">
            <Logo />
          </Link>
        </div>

        <div className="grow"></div>

        <div className="flex items-center">
          {primaryItems.map((item, key) => (
            <Link
              key={key}
              href="#"
              className={`${
                opened ? "hidden" : "block"
              } uppercase p-4 hover:text-red-700`}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="grow"></div>

        <div className="flex w-32">
          <div className="grow"></div>
          <button
            className="uppercase py-4 pl-4 pr-7 hover:cursor-pointer hover:text-red-700"
            onClick={toggleMenu}
          >
            {opened ? "ЗАКРИТИ" : "МЕНЮ"}
          </button>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const primaryItems = ["Афіша", "Репертуар", "Актори та Персонал", "Новини"];
const secondaryItems = ["Фестиваль", "Вакансії", "Контакти", "Про Нас"];
const contactItems = [
  { label: "Адреса", caption: "Театральна площа, 4" },
  { label: "Електронна пошта", caption: "dramteatr@i.ua" },
  { label: "Каса", caption: "+380 372 52-50-85" },
];

export default function Footer() {
  return (
    <div className="text-center">
      <div className="grid grid-cols-4">
        <div className="font-serif uppercase sm:text-left p-4 flex flex-col items-start border-b border-r border-zinc-800">
          {primaryItems.map((item) => (
            <Link href="#" key={item} className="mb-2 hover:text-red-600 w-fit">
              {item}
            </Link>
          ))}
        </div>
        <div className="col-span-2">
          {contactItems.map((item) => (
            <div className="border-b border-r border-zinc-800 text-center p-4" key={item.label}>
              <p className="font-thin">{item.label}</p>
              <p className="uppercase font-serif text-4xl">{item.caption}</p>
            </div>
          ))}
        </div>
        <div className="font-serif uppercase p-4 flex flex-col items-end border-b border-zinc-800">
          {secondaryItems.map((item) => (
            <Link href="#" key={item} className="mb-2 hover:text-red-600 w-fit">
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex text-center uppercase font-serif">
        <Link href="#" className="w-1/2 border-b border-r border-zinc-800 p-4 hover:text-red-600">Facebook</Link>
        <Link href="#" className="w-1/2 border-b border-zinc-800 p-4 hover:text-red-600">Instagram</Link>
      </div>

      <div className="font-thin text-left flex sm:justify-between">
        <p className="p-4">
          @2023, Чернівецький академічний обласний український
          музично-драматичний театр ім. Ольги Кобилянської
        </p>
        <p className="p-4">Розробка — BS</p>
      </div>
    </div>
  );
}

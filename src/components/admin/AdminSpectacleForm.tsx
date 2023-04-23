import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { z } from "zod";

import { format } from "date-fns";
import { uk } from "date-fns/locale";

const schema = z.object({
  title: z.string().min(1, { message: "Це поле обов'язкове" }),
  id: z.string().min(1, { message: "Це поле обов'язкове" }),
  imageUrl: z.string().url({ message: "Невірний формат адреси зображення" }),
  author: z.string().min(1, { message: "Це поле обов'язкове" }),
  type: z.string().min(1, { message: "Це поле обов'язкове" }),
  duration: z.string().min(1, { message: "Це поле обов'язкове" }),
  description: z.string(),
  forChildren: z.boolean(),
  published: z.boolean(),
});

type SpectacleType = z.infer<typeof schema>;
type EventsType = {
  events: {
    id: number;
    beginningAt: Date;
    spectacleId: string;
  }[];
};

export default function AdminSpectacleForm({
  data,
}: {
  data: SpectacleType & EventsType;
}) {
  // const [opened, setOpened] = useState(false);
  // const [audience, setAudience] = useState(data.audience);
  // const toggleDD = () => {
  //   setOpened(!opened);
  // };

  // const handleDD = (audience: string) => {
  //   setAudience(audience);
  //   setValue("audience", audience);
  //   toggleDD();
  // };

  const {
    register,
    handleSubmit,
    reset,
    // setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: data.title,
      id: data.id,
      imageUrl: data.imageUrl,
      author: data.author,
      type: data.type,
      duration: data.duration,
      description: data.description,
      forChildren: data.forChildren,
      published: data.published,
      events: data.events,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SpectacleType> = (data) => console.log(data);

  useEffect(() => {
    reset({
      title: data.title,
      id: data.id,
      imageUrl: data.imageUrl,
      author: data.author,
      type: data.type,
      duration: data.duration,
      description: data.description,
      forChildren: data.forChildren,
      published: data.published,
      events: data.events,
    });
  }, [data, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label className="text-sm mb-2 text-zinc-500">Заголовок</label>
      <input {...register("title")} className={inputStyles(!!errors.title)} />
      <InputErrorAndDescription
        errorMsg={errors.title?.message}
        description="Відображається на головній сторінці, на сторінці вибраної вистави, а також на сторінці афіша"
      />

      <label className="text-sm mt-8 mb-2 text-zinc-500">Ідентифікатор</label>
      <input {...register("id")} className={inputStyles(!!errors.id)} />
      <InputErrorAndDescription
        errorMsg={errors.id?.message}
        description="Використовується для утворення посилання"
      />

      <label className="text-sm mt-8 mb-2 text-zinc-500">
        Адреса зображення
      </label>
      <input
        {...register("imageUrl")}
        className={inputStyles(!!errors.imageUrl)}
      />
      <InputErrorAndDescription
        errorMsg={errors.imageUrl?.message}
        description="Використовується для завантаження зображення"
      />

      <label className="text-sm mt-8 mb-2 text-zinc-500">Автор</label>
      <input {...register("author")} className={inputStyles(!!errors.author)} />
      <InputErrorAndDescription
        errorMsg={errors.author?.message}
        description="Відображається на головній сторінці, на сторінці вибраної вистави, а також на сторінці афіша"
      />

      <label className="text-sm mt-8 mb-2 text-zinc-500">Тип вистави</label>
      <input {...register("type")} className={inputStyles(!!errors.type)} />
      <InputErrorAndDescription
        errorMsg={errors.type?.message}
        description=""
      />

      <label className="text-sm mt-8 mb-2 text-zinc-500">
        Тривалість вистави
      </label>
      <input
        {...register("duration")}
        className={inputStyles(!!errors.duration)}
      />
      <InputErrorAndDescription
        errorMsg={errors.duration?.message}
        description=""
      />

      <label className="text-sm mt-8 mb-2 text-zinc-500">Опис вистави</label>
      <textarea
        {...register("description")}
        rows={5}
        className={inputStyles(!!errors.description)}
      />
      <InputErrorAndDescription
        errorMsg={errors.description?.message}
        description=""
      />

      {/* <div className="relative">
        <label className="text-sm mt-8 mb-2 text-zinc-500">Аудиторія</label>
        <input {...register("audience")} className="hidden" />
        <button
          type="button"
          onClick={toggleDD}
          className={`flex bg-zinc-800 hover:bg-zinc-700 py-3 px-4 w-full outline-none ${
            opened
              ? "focus:ring-0 hover:bg-zinc-800"
              : "focus:ring-2 hover:bg-zinc-700"
          } ring-inset ring-zinc-100 border-b border-zinc-500 focus:border-zinc-900`}
        >
          <span>{audience === "general" ? "Загальна" : "Для дітей"}</span>
          <span className="grow"></span>
          <svg
            fill="currentColor"
            width="28"
            height="28"
            viewBox="0 0 16 16"
            className="p-1"
          >
            <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
            <title>Open menu</title>
          </svg>
        </button>
        <ul
          className={`bg-zinc-800 border border-zinc-100 absolute w-full ${
            opened ? "block" : "hidden"
          }`}
        >
          <li
            onClick={() => handleDD("general")}
            className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 flex"
          >
            <span>Загальна</span>
            <span className="grow"></span>
            <svg
              fill="currentColor"
              width="28"
              height="28"
              viewBox="0 0 32 32"
              className={`p-1 ${audience === "general" ? "block" : "hidden"}`}
            >
              <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path>
              <title>Check</title>
            </svg>
          </li>
          <li
            onClick={() => handleDD("children")}
            className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 flex"
          >
            <span>Для дітей</span>
            <span className="grow"></span>
            <svg
              fill="currentColor"
              width="28"
              height="28"
              viewBox="0 0 32 32"
              className={`p-1 ${audience === "children" ? "block" : "hidden"}`}
            >
              <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path>
              <title>Check</title>
            </svg>
          </li>
        </ul>
      </div>
      <InputErrorAndDescription
        errorMsg={errors.audience?.message}
        description=""
      /> */}

      <label className="text-sm mt-8 mb-2 text-zinc-500">Аудиторія</label>
      <div className="flex items-center -mb-2">
        <input
          {...register("forChildren")}
          id="forChildren"
          type="checkbox"
          className="w-[18px] h-[18px] mr-4  checkbox-icon focus:ring-2 ring-zinc-100 ring-offset-2 ring-offset-zinc-900 bg-zinc-800 hover:bg-zinc-700 outline-none border border-zinc-100"
        />
        <label htmlFor="forChildren">Для дітей</label>
      </div>
      <InputErrorAndDescription
        errorMsg={errors.published?.message}
        description="Ця опція позначає виставу як рекомендовану для дітей"
      />

      <label className="text-sm mt-8 mb-2 text-zinc-500">Публікування</label>
      <div className="flex items-center -mb-2">
        <input
          {...register("published")}
          id="published"
          type="checkbox"
          className="w-[18px] h-[18px] mr-4 checkbox-icon focus:ring-2 ring-zinc-100 ring-offset-2 ring-offset-zinc-900 bg-zinc-800 hover:bg-zinc-700 outline-none border border-zinc-100"
        />
        <label htmlFor="published">Відображати на сайті</label>
      </div>
      <InputErrorAndDescription
        errorMsg={errors.published?.message}
        description="Ця опція дозволяє зробити виставу видимою для відвідувачів"
      />

      <div className="text-sm mt-8 mb-2 text-zinc-500">Сеанси</div>
      <div className="py-0 h-0 border-b border-zinc-700"></div>
      {data.events.length ? (
        data.events.map((event) => (
          <div className="py-3 border-b border-zinc-700" key={event.id}>
            {format(event.beginningAt, "HH:mm dd MMMM yyyy", { locale: uk })}
          </div>
        ))
      ) : (
        <div className="py-3 border-b border-zinc-700">Сеансів немає</div>
      )}

      <button
        type="submit"
        className="
        mt-12 flex w-fit cursor-pointer px-4 py-3
        text-zinc-100
        bg-blue-600 hover:bg-blue-700
        outline-none focus:ring-2 ring-inset ring-zinc-100
        "
      >
        <span className="leading-[1.2rem] pr-4">Зберегти</span>
        <span className="grow"></span>
        <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
          <path d="M27.71,9.29l-5-5A1,1,0,0,0,22,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V10A1,1,0,0,0,27.71,9.29ZM12,6h8v4H12Zm8,20H12V18h8Zm2,0V18a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v8H6V6h4v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6.41l4,4V26Z"></path>
          <title>Save</title>
        </svg>
      </button>
    </form>
  );
}

const inputStyles = (error: boolean) =>
  `py-3 px-4 bg-zinc-800 hover:bg-zinc-700 ${
    error
      ? "outline-none ring-2 ring-inset ring-red-500 border-b border-zinc-900"
      : "outline-none focus:ring-2 ring-inset ring-zinc-100 border-b border-zinc-500 focus:border-zinc-900"
  }`;

const InputErrorAndDescription = ({
  errorMsg,
  description,
}: {
  errorMsg: string | undefined;
  description: string;
}) => {
  return (
    <span
      className={`text-sm mt-2 ${
        errorMsg ? "text-red-500" : "text-zinc-500"
      }  min-h-[20px]`}
    >
      {errorMsg ? errorMsg : description}
    </span>
  );
};

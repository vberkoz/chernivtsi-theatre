import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

type AdminSpectacleFormType = {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
  type: string;
  duration: string;
  description: string;
  audience: string;
  published: boolean;
  created: Date;
  events: {
    id: number;
    beginningAt: Date;
  };
};

type FormDataType = {
  title: string;
  id: string;
};

type Props = {
  data: FormDataType;
};

export default function AdminSpectacleForm({ data }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      title: data.title,
      id: data.id,
    },
  });
  const onSubmit: SubmitHandler<FormDataType> = (data) => console.log(data);

  useEffect(() => {
    reset({
      title: data.title,
      id: data.id,
    });
  }, [data, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="title" className="text-sm text-zinc-500">
        Заголовок
      </label>
      <input
        {...register("title", { required: true })}
        className={`py-3 px-4 my-2
            bg-zinc-800 
              ${
                errors.title
                  ? "outline-none ring-2 ring-inset ring-red-500 border-b border-zinc-900"
                  : "outline-none focus:ring-2 ring-inset ring-zinc-100 border-b border-zinc-500 focus:border-zinc-900"
              }
              `}
      />
      {errors.title ? (
        <span className="text-sm text-red-500 min-h-[20px]">
          Це поле обов&apos;язкове
        </span>
      ) : (
        <span className="text-sm text-zinc-500 min-h-[20px]">
          Відображається на головній сторінці, на сторінці вибраної вистави, а
          також на сторінці афіша
        </span>
      )}

      <label htmlFor="id" className="text-sm mt-8 text-zinc-500">
        Ідентифікатор
      </label>
      <input
        {...register("id", { required: true })}
        className={`py-3 px-4 my-2
            bg-zinc-800 
              ${
                errors.id
                  ? "outline-none ring-2 ring-inset ring-red-500 border-b border-zinc-900"
                  : "outline-none focus:ring-2 ring-inset ring-zinc-100 border-b border-zinc-500 focus:border-zinc-900"
              }
              `}
      />
      {errors.id ? (
        <span className="text-sm text-red-500 min-h-[20px]">
          Це поле обов&apos;язкове
        </span>
      ) : (
        <span className="text-sm text-zinc-500 min-h-[20px]">
          Використовується для утворення посилання
        </span>
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

"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(1, { message: "This field is required" }),
  handle: z.string().min(1, { message: "This field is required" }),
  adminUrl: z.string().url({ message: "Invalid url" }),
});

type PostType = z.infer<typeof postSchema>;

export default function PostForm({ data }: { data: PostType }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      title: data.title,
      handle: data.handle,
      adminUrl: data.adminUrl,
    },
    resolver: zodResolver(postSchema),
  });

  return (
    <form className="flex flex-col">
      <label className="text-sm mb-2 text-zinc-500">Title</label>
      <input {...register("title")} className={inputStyles(!!errors.title)} />
      <InputErrorAndDescription
        errorMsg={errors.title?.message}
        description="Post title"
      />

      <label className="text-sm mt-8 mb-2 text-zinc-500">Handle</label>
      <input {...register("handle")} className={inputStyles(!!errors.handle)} />
      <InputErrorAndDescription
        errorMsg={errors.handle?.message}
        description="Handle is a unique post identifier"
      />

      <label className="text-sm mt-8 mb-2 text-zinc-500">Admin URL</label>
      <input {...register("adminUrl")} className={inputStyles(!!errors.adminUrl)} />
      <InputErrorAndDescription
        errorMsg={errors.adminUrl?.message}
        description="URL to open post in admin area"
      />

      <button
        type="submit"
        className={`
        mt-12 flex w-fit cursor-pointer px-4 py-3
        ${
          isDirty
            ? "text-zinc-100 bg-blue-600 hover:bg-blue-700"
            : "text-zinc-700 bg-zinc-800"
        }
        outline-none focus:ring-2 ring-inset ring-zinc-100
        `}
      >
        <span className="leading-[1.2rem] pr-4">{isSubmitting ? "Saving..." : "Save"}</span>
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

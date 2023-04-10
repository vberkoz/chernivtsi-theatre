import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getSession } from 'next-auth/react';

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession({ req: opts.req });

  return {
    session,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;

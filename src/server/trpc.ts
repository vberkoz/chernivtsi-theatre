import { initTRPC, TRPCError } from '@trpc/server';
import { Context } from './context';
import superjson from 'superjson';

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

// const isAuthed = t.middleware(({ next, ctx }) => {
//   if (!ctx.session) {
//     throw new TRPCError({
//       code: 'UNAUTHORIZED',
//     });
//   }
//   return next({
//     ctx: {
//       // Infers the `session` as non-nullable
//       session: ctx.session,
//     },
//   });
// });

// Base router and procedure helpers
// export const middleware = t.middleware;
export const router = t.router;
export const procedure = t.procedure;
// export const protectedProcedure = t.procedure.use(isAuthed);
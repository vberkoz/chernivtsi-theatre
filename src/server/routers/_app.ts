import { procedure, router } from '../trpc';
import { menuRouter } from './menu';

export const appRouter = router({
  healthcheck: procedure.query(() => 'yay!'),
  menu: menuRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
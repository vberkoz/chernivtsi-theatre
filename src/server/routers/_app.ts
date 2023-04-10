import { publicProcedure, router } from '../trpc';
import { menuRouter } from './menu';
import { spectacleRouter } from './spectacle';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  menu: menuRouter,

  spectacle: spectacleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
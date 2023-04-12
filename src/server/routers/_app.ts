import { publicProcedure, router } from '../trpc';
import { eventRouter } from './event';
import { menuRouter } from './menu';
import { postRouter } from './post';
import { spectacleRouter } from './spectacle';
import { vacancyRouter } from './vacancy';
import { workerRouter } from './worker';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  menu: menuRouter,

  event: eventRouter,
  post: postRouter,
  spectacle: spectacleRouter,
  vacancy: vacancyRouter,
  worker: workerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
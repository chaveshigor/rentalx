import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { speficicationsRoutes } from "./specifications.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", speficicationsRoutes);

export { routes };

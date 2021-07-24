import { Router } from "express";

import { authRoutes } from "./auth.routes";
import { categoriesRoutes } from "./categories.routes";
import { speficicationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", speficicationsRoutes);
routes.use("/users", usersRoutes);
routes.use("/auth", authRoutes);

export { routes };

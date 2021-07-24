import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { AuthUserController } from "../modules/accounts/useCases/authUser/authUserController";

const authRoutes = Router();

authRoutes.post("/", new AuthUserController().handle);
authRoutes.post("/teste", ensureAuth, new AuthUserController().handle);

export { authRoutes };

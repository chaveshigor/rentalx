import { Router } from "express";

import { AuthUserController } from "../../../../modules/accounts/useCases/authUser/authUserController";
import { ensureAuth } from "../middlewares/ensureAuth";

const authRoutes = Router();

authRoutes.post("/", new AuthUserController().handle);
authRoutes.post("/teste", ensureAuth, new AuthUserController().handle);

export { authRoutes };

import { Router } from "express";
import multer from "multer";

import { upload } from "../../../../config/upload";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/createUserController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/useCases/updateUserAvatar/updateUserAvatarController";
import { ensureAuth } from "../middlewares/ensureAuth";

const usersRoutes = Router();

const uploadAvatar = multer(upload("./tmp/avatar"));

usersRoutes.post(
  "/",
  uploadAvatar.single("avatar"),
  new CreateUserController().handle
);

usersRoutes.patch(
  "/avatar",
  ensureAuth,
  uploadAvatar.single("avatar"),
  new UpdateUserAvatarController().handle
);

export { usersRoutes };

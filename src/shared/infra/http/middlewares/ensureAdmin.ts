import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/usersRepository";

async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const { id: user_id } = req.user;

  const usersRepo = new UsersRepository();

  const currentUser = await usersRepo.findOne({ id: user_id });
  if (!currentUser.admin) {
    return res.status(401).json({
      error: "user is not an admin",
    });
  }

  return next();
}

export { ensureAdmin };

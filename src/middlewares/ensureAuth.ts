import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/usersRepository";

interface IPayload {
  sub: string;
}

async function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const { authorization } = req.headers;

  const token = authorization.split(" ")[1];

  try {
    const { sub: user_id } = verify(
      token,
      process.env.APP_SECRETKEY
    ) as IPayload;

    const repo = new UsersRepository();

    const user = await repo.findOne({ id: user_id });
    if (!user) {
      return res.status(400).json({
        error: "Invalid user",
      });
    }

    req.user = {
      id: user_id,
    };
  } catch (error) {
    return res.status(400).json({
      error: "Invalid token",
    });
  }

  return next();
}

export { ensureAuth };

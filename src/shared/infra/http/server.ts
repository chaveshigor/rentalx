import "reflect-metadata";

import "@shared/container";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";

import { AppError } from "@shared/errors/appError";
import { newConnection } from "@shared/infra/typeorm/index";

import swaggerJson from "../../../../swagger.json";
import { routes } from "./routes/index.routes";

newConnection();

const app = express();

app.use(express.json());

// Using routes
app.use(routes);

// Setting documentation
app.use("/api-Docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

// Error middleware
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction): Response => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: "error",
        description: err.message,
      });
    }

    return res.status(500).json({
      status: "error",
      description: `error not expected - ${err.message}`,
    });
  }
);

const port = process.env.APP_PORT || 3030;

app.listen(port, () => console.log(`Server running at port ${port}`));

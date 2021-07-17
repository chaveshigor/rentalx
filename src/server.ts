import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";

import swaggerJson from "../swagger.json";
// Importing routes
import { routes } from "./routes/index.routes";

const app = express();

app.use(express.json());

// Setting documentation
app.use("/api-Docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

// Using routes
app.use(routes);

// Error middleware
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction): Response => {
    if (err instanceof Error) {
      return res.status(400).json({
        status: "error",
        description: err.message,
      });
    }

    return res.status(400).json({
      status: "error",
      description: "error not expected",
    });
  }
);

const port = 3030;

app.listen(port, () => console.log(`Server running at port ${port}`));

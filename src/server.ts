import express, { Request, Response, NextFunction } from "express";

// Importing routes
import { routes } from "./routes/index.routes";

const app = express();

app.use(express.json());

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

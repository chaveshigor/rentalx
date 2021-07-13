import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

const port = 3030;

app.listen(port, () => console.log(`Server running at port ${port}`));

/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/quotes */
import express from "express";
import morgan from "morgan";
import warnings from "./api/warnings";
import notFound from "./api/404";

export const app = express();
app.use(morgan("tiny"));

app.use(
  express.json({
    type: "*/*",
  })
);

app.use(notFound);
app.use(warnings);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

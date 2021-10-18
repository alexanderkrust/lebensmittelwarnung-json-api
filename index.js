/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/quotes */
import express from "express";
import morgan from "morgan";
import warnings from "./api/warnings";

export const app = express();
app.use(morgan("tiny"));

app.use(
  express.json({
    type: "*/*",
  })
);

app.use("/api/warnings/:category?", warnings);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

import express from "express";
import { userRouter } from "./user/infrastructure/userRouter";

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

import express from "express";
import RideRouter from "./routes/rideRoute";

const app = express();

app.use(express.json());

app.use("/rides", RideRouter);

const start = (): void => {
  try {
    app.listen(3333, () => {
      console.log("Server started on port 3333");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();

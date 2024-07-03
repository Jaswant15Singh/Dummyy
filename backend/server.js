import express from "express";
import connectMongo from "./config/db.js";
import userRoutes from "./routes/userRoute.js";
import cors from "cors"
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
connectMongo();
app.get("/", (req, res) => {
  res.send("success");
});

app.use("/api/v1", userRoutes);

app.listen(4000, () => {
  console.log("listening on port 4000");
});

import express from "express";
import dotenv from "dotenv";
import Connection from "./connection.js";
import router from "./router.js";
import cors from "cors";

dotenv.config(); //to get data from .env

const port = process.env.PORT; //to get the port variable

const app = express();
// automatically convert to json
app.use(express.json({limit:"10mb"}));
app.use(cors());//by using origin we can select certain domain to run the code
app.use("/api", router);

Connection()
  .then(() => {
    app.listen(port, () => {
      console.log(`server created at ${port}`);
    });
  })
  .catch(() => {
    console.log("cant connect to server");
  });

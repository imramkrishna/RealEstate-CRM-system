import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import {Request, Response} from "express"
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req:Request, res:Response) =>{
    res.send("Backend is running");
})
app.listen(5000), () => console.log("Backend is running on port 5000")
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import weatherRoutes from "./src/routes/weather.routes.js";

const app = express();
app.use(cors());
const port = 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin:"*",
    methods:["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
}));

app.use("/", weatherRoutes);

app.listen(port || vite_port,()=>{
    console.log(`Server is running at ${port || vite_port}`);
});

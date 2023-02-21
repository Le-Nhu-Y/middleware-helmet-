import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";


const PORT = 3000;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("common"));


app.get('/', (req, res) => {
    res.json({
        message: "Hello Stranger! How are you?",
    });
})


app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000 ")
})
//npm run start:dev
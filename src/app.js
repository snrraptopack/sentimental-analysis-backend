import express from 'express';
import cors from "cors";
import { model } from "./aiConfig.js";

const PORT =  3001; // Change the port number here

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.send("hello this is a get request");
});

app.post('/api', async (req, res) => {
    const { userInput } = req.body;

    try {
        let result = await model.generateContent(userInput);
        let responseText = result.response.text();

        res.json({
            status: 'success',
            message: JSON.parse(responseText)
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "An error occurred",
            error: err
        });
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please use a different port.`);
        process.exit(1);
    } else {
        throw err;
    }
});
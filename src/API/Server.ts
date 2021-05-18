import express from 'express';
import dotenv from "dotenv";
import {Server, Socket} from 'socket.io';
import { buyCards, sellCards, tradeCards } from './Routes/Trade';
import { createServer } from 'http';

const app = express();
dotenv.config();

const port = Number(process.env.PORT) || 2000;
const hostname = process.env.IP;

//Middlewares
app.use(express.json());

//Route Middlewares 
app.use("/api/cards", buyCards);
app.use("/api/cards", sellCards);
app.use("/api/cards", tradeCards);

app.listen(port, hostname!, () => {
    console.log(`server running http://${hostname}:${port}`)
});

//Websocket
const httpServer = createServer(app);
const options = {cors : {origin:'*'}};
export const io = new Server(httpServer, options);

io.on("connection", (socket : Socket) => {
    console.log(`a user connected ${socket.id}`);
});

const server = httpServer.listen(Number(process.env.WebSocketPort), () => {
    console.log(`listening on http://${hostname}:${Number(process.env.WebSocketPort)}`);
});

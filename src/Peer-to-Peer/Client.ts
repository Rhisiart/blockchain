import {io} from 'socket.io-client';

const socket = io('http://192.168.1.68:3000');

socket.on('connect', () => {
    console.log(socket.id);
});

socket.on('hello', (...args) => {
    console.log(args);
});
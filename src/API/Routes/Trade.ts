import Routes from 'express';
import {Request} from '../Model/request';
import {io} from '../Server';
const route = Routes();

export const buyCards = route.post('/buy', async (req, res) => {
    
    return res.json(req.body)
});

export const sellCards = route.post('/sell', async (req, res) => {

    
    return res.status(200).json({'babyArray': 'correct'});
});

export const tradeCards = route.post('/trade', async (req, res) => {
    return res.status(200).json({'babyArray': 'correct'});
});
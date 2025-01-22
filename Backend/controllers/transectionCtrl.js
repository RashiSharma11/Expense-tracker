import transectionModel from '../models/transectionModel.js';
import moment from 'moment';

export const getAllTransection = async (req, res) => {
    try {
        const { frequency, selectedDate, type } = req.body;
        const transections = await transectionModel.find({
            ...(frequency !== 'custom' 
                ? {
                    date: {
                        $gt: moment().subtract(Number(frequency), 'd').toDate(),
                    },
                }
                : {
                    date: {
                        $gte: selectedDate[0],
                        $lte: selectedDate[1],
                    },
                }),
            userId: req.body.userId,
            ...(type !== 'all' && { type }),
        });
        
        res.status(200).json(transections);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const addTransection = async (req, res) => {
    try {
        const newTransection = new transectionModel(req.body);
        await newTransection.save();
        res.status(201).send('Transection Created');
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
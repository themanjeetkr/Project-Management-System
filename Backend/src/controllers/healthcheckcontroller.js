import { Apiresponse } from '../utils/api-response.js';

export const healthCheck = (req, res) => {
    try {
        res.status(200).json(
            new Apiresponse(200, { message: 'OK' })
        );
    } catch (error) {
        res.status(500).json(
            new Apiresponse(500, { message: 'Internal Server Error' })
        );
    }
};
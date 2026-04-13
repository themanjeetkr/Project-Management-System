import { Apiresponse } from '../utils/api-response.js';

export const healthCheck = (req, res) => {
    try {
        res.status(200).json(
            new Apiresponse(200, { message: 'OK' })
            //  for checking health of the server, it will return 200 OK if the server is running fine
        );
    } catch (error) {
        res.status(500).json(
            new Apiresponse(500, { message: 'Internal Server Error' })
        );
    }
};
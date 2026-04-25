import { Apiresponse } from '../utils/api-response.js';
import {asyncHandler} from '../utils/aync-handler.js';

// export const healthCheck = async(req, res, next) => {
//     try {
//         const user=await getuserfromdb(); // Assuming you have a function to get user data from the database
//         res.status(200).json(
//                         //  for checking health of the server, it will return 200 OK if the server is running fine

//             new Apiresponse(200, { message: 'OK' })
//         );
//     } catch (error) {
//       next(error)
            

       
//     }
// };
const healthCheck = asyncHandler(async (req, res, next) => {
    res.status(200).json(
        new Apiresponse(200, { message: 'server is still running' })
    );
});

export {healthCheck};
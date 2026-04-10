import dotenv from 'dotenv';
import app from './app.js';
// const app = express();
dotenv.config()
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})


// let username = process.env.APP_USERNAME;
// console.log(username);


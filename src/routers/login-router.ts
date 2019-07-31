import express, {Request, Response,} from 'express';
import User from '../models/User';
import * as userService from '../services/user-service';
import db from '../util/pg-connector';
//import toMainBody from '../../v2 HTMLs/p0-script';
const loginRouter = express.Router();

loginRouter.post('/', async(req: Request, response: Response) => {
    const payload = req.body; //retrieves json text input from user
    console.log('payload', payload)
    //Here begins the login process in steps
    //1. put user-provided info into variables
    // match username var against db and prepare varname for db.query 
    let matchUserNameQuery = `select userid, username, password, firstname, lastname, email, role from users 
                                where username = $1;`; //the $1; will get passed
                                // into the db query payload.username argument below,
                                // protecting us from SQL injection.
    // execute varname query
    console.log('matchUserNameQuery', matchUserNameQuery)
    const usernamePasswordResults = await db.query(matchUserNameQuery, [payload.username]);
    console.log(usernamePasswordResults); 
    // if False, message bad info
    //We have to use .rows[] to get query answers
    if (!usernamePasswordResults.rows[0]) {
        response.status(400).json({message: 'Invalid Credentials'})
    };
    //if possible, use a spread operator function, ...[userInfo] into ...[new one], perform a lower() also,
    const userInfo:User = new User(usernamePasswordResults.rows[0]);
    req.session.username = userInfo.userName; //info has arrived  
    req.session.password = userInfo.password;// info has arrived
    req.session.userid = userInfo.userId;// info has arrived
    req.session.firstname = userInfo.firstName;// info has arrived
    req.session.lastname = userInfo.lastName;// info has arrived
    req.session.email = userInfo.email;// info has arrived
    req.session.role = userInfo.role;// info has arrived
    //req.session.save();
    // true - goto next step
    // put passwords into new vars for ease of reading and comprehension but below if could be:
    // if (usernamePasswordResults.rows[0].password === payload.password) {
    const storedPassword = usernamePasswordResults.rows[0].password; //from the db
    const providedPassword = payload.password; // from input
   //console.log('provided username and password')
    // match passwords, fail if they don't match, else post message "welcome user"
    if (storedPassword === providedPassword) {
        response.status(200).json({userInfo});
        //toMainBody();
    } else {
        response.status(400).send('Username password combination invalid.  Try again.')
    } 
       
});
  
loginRouter.get('/', (request: Request, response: Response) => {
    //response.json({message: `Hello from Login Page ${request.session.name}!`});  
    response.json({message: `Hello from Login Page!`});  
});

//export default loginRouter;
export default loginRouter;

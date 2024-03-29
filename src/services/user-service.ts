import User from "../models/User";
import ReimbursementStatus from "../models/ReimbursementStatus";
import ReimbursementType from "../models/ReimbursementType";
import Role from "../models/Role";
import db from '../util/pg-connector';

/*export async function getUsers() Sample ProgreSQL code below
    const queryString = `select username from users where firstname = 'Dylan'`;
    //const queryString = `select users.username from users;`;
    //const queryString = `select username, email from users WHERE username in ('samSam', 'jonJon')`;
    //const queryString = `select * from users WHERE username in ('samSam', 'jonJon')`;
    const queryString = `select username from users WHERE username like '%d' or 
        username like '%s'`; this works 
    //const queryString = `select * from users`; Dylan's example code
    //select * from cats where fur_color = 'green' or fur_color = 'blue';
*/
 
//GETUSER FUNCTION FROM USERROUTER  
export async function getUsers() {
    const queryString = `select userid, username, firstname, lastname, email, role from users order by userid`;
    const userResults = await db.query(queryString);
    //console.log('rows printed' + userResults)
    // checking if finance manager by searching for role=2
    //return userResults.rows[1];  // this get individual row.  woo hoo!
    return userResults.rows;   //sends result back to user-router request
}


export function createUser(user: User): Promise<User[]> {
    // enforce business rules
    if (!user.userId) {
        console.warn('User requires name');
    }
    // The below operation will send a query to the database, which
    // will then return a new promise that includes only the row data
    return db.query(`INSERT INTO user (userId, userName, password, firstName, lastName, email, role)
    VALUES ($1, $2) RETURNING userId, userName, password, firstName, lastName, email, role`,
        [user.userId, user.userName])
        .then((data) => {
            return data.rows;
        }).catch((err) => {
            return [];
        });
}

//export async function getUserById(userId: number): Promise<User> {
export async function getUserById(userId: number) {
    const result = await db.query(`SELECT userid, username, firstname, lastname, email, role FROM users WHERE userid = $1`, [userId]);
        //console.log('getByUserId', result.rows[userId]);
        if (result.rowCount === 0) {
            return ("Not in the database");
        }      
    return result.rows[0];
}
export async function patchCoalesce(patch: User) {
    const result = await db.query(`UPDATE users SET username = COALESCE($1, username), \
    firstname = COALESCE($2, firstname), lastname = COALESCE($3, lastname),\
    email = COALESCE($4, email), role = COALESCE($5, role) WHERE userid = $6 \
    RETURNING username, firstname, lastname, email, role, userid;`,
        [patch.userName, patch.firstName, patch.lastName, patch.email, parseInt(patch.role), parseInt(patch.userId)])
        

    if (result.rowCount === 0) {
        // throw error, 404
    } else {
        const modifiedUser:User = new User(result.rows[0]);

        return modifiedUser;
    }
}


document.getElementById("loginBtn").addEventListener("click", loginChecker);
document.getElementById("employee-info-btn").addEventListener("click", toGetEmployeeInfo);
document.getElementById("get-all-users-btn").addEventListener("click", createTableForAllUsers);
document.getElementById("create-new-reimb").addEventListener("click", toCreateNewReimb);
document.getElementById("get-update-user-btn").addEventListener("click", toUpdateUser);
document.getElementById("get-reim-by-status-btn").addEventListener("click", toGetReimByStatus);
document.getElementById("choosing-status-btn").addEventListener("click", createTableForReimByStatus);
document.getElementById("get-reim-by-id-btn").addEventListener("click", toGetReimById);
document.getElementById("choosing-reim-by-id-btn").addEventListener("click", createTableForReimById);
document.getElementById("reim-by-user-id-btn").addEventListener("click", createTableForReimByUserId);
document.getElementById("update-reims-btn").addEventListener("click", toUpdateReims);
document.getElementById("submitNewReimBtn").addEventListener("click", createNewReimbursementInfo);
// Below begins the Update User seq., by getting user by id first
document.getElementById("get-user-4-update-btn").addEventListener("click", getUserByIdForUpdate);
document.getElementById("get-reim-4-update-btn").addEventListener("click", getReimbursementByIdForUpdate);
document.getElementById("submit-update-reim-btn").addEventListener("click", submitReimbursementUpdate);
document.getElementById("submit-update-user-btn").addEventListener("click", submitUserUpdate);
document.getElementById("newReimBtn").addEventListener("click", clearCreateNewReimb);

//

async function loginChecker() {
    var a = document.getElementById('usernameInput').value;
    var b = document.getElementById('passwordInput').value;
    console.log('username is', a, "and pswd is", b); 
    const payload = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: a, password: b })
    })
    console.log(await payload.status);
    if (await payload.status === 400) {
        document.getElementById('wrongLogin').style.display = 'block';
    }  else {
        const response = await payload.json();
        document.getElementById('reim-by-user-id-input').value = response.userInfo.userId;
       // document.getElementById('ret-first-name').innerText = response.userInfo.firstName + " " + response.userInfo.lastName;
        //document.getElementById('ret-last-name').innerText = response.userInfo.lastName;
       //document.getElementById('ret-email').innerText = response.userInfo.email;
        var global_role = response.userInfo.role;
        toMainBody(global_role);
    }
}
//ret-user-id
function toMainBody(role) {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("nav-content-container").style.display="flex";
    document.getElementById("navBar").style.display="block";
    document.getElementById("content-area").style.visibility="visible";
    document.getElementById("outer-content-getEmployeeInfo").style.display="block";
    if (role <=1) {
        document.getElementById('get-all-users-btn').style.display = "none";
        document.getElementById('get-update-user-btn').style.display = "none";
        document.getElementById('get-reim-by-status-btn').style.display = "none";
        document.getElementById('get-reim-by-id-btn').style.display = "none";
        document.getElementById('update-reims-btn').style.display = "none";
    } if (role == 2) {
        document.getElementById('get-update-user-btn').style.display = "none";
    }   
}

function toGetEmployeeInfo() {
    document.getElementById("indexContentDiv").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-getAllUsers").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="block";
}
function toGetAllUsers() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";  
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-getAllUsers").style.display="block";
}
function toCreateNewReimb() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none"; 
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-createNewReImbursement").style.display = "block";    
}

function toUpdateUser() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "block";   
}
function toGetReimByStatus() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "block";   
}
function toGetReimById() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "block";   
}

function toUpdateReims() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "none";  
    document.getElementById("outer-content-updateReims").style.display = "block";  
}

async function createTableForAllUsers() {
    const payload = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }       
      })
      const response = await payload.json();
    const userTable = document.getElementById('getAllUsersTable');
    //Below, creating table headers dynamically
    userTable.innerHTML = `
        <row id="th-row-of-all-users">
                <th class="user-columns" >User ID</th>
                <th class="user-columns" >Username</th>
                <th class="user-columns" >First Name</th>
                <th class="user-columns" >Last Name</th>
                <th class="user-columns" >Email</th>
                <th class="user-columns" >Role</th>
        </row>`;
        // loop thru the response to create rows, then 2 lines down, create the tds.
    for (var i = 0; i < response.length; i++) {
        const row = document.createElement('row');
        for(let c of Object.values(response[i]) ){
            const td = document.createElement('td');
            td.innerText = c;
            td.className = 'user-columns';
            row.appendChild(td);
        }
        userTable.appendChild(row);
    }
    userTable.style.display='block';
    toGetAllUsers();
}

async function createTableForReimByStatus() {
    const selectedStatus = document.getElementById('reim-status-selection');
    //selectedStatus.value) "grabs selected value from the dropdown menu
    const payload = await fetch(`http://localhost:3000/reimbursement/status/${selectedStatus.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }       
      })
    const response = await payload.json();
        console.log(response);
    const reimStatusTable = document.getElementById('getReimbursementsByStatusTable');
    reimStatusTable.innerHTML = `
        <row id="th-row-of-reim-status">
                <th class="reim-columns" >ID</th>
                <th class="reim-columns" >Author</th>
                <th class="reim-columns" >Amount</th>
                <th class="reim-columns" >Date Submitted</th>
                <th class="reim-columns" >Date Resolved</th>
                <th class="reim-columns" >Description</th>
                <th class="reim-columns" >Resolver</th>
                <th class="reim-columns" >Status</th>
                <th class="reim-columns" >Type</th>
        </row>`;
      console.log("hello");
    for (var i = 0; i < response.length; i++) {
        const row = document.createElement('row');
        for(let c of Object.values(response[i]) ){
            const td = document.createElement('td');
            td.innerText = c;
            td.className = 'reim-columns';
            row.appendChild(td);
        }
        reimStatusTable.appendChild(row);
    }
    reimStatusTable.style.display='block';   
}

async function createTableForReimById() {
    const userId = document.getElementById('reim-by-id-input');
    console.log('following is the UserId', userId.value);// selected value is correct
    const payload = await fetch(`http://localhost:3000/reimbursement/author/${userId.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }       
      })
    
    try {
        const response = await payload.json();
        const reimIdTable = document.getElementById('getReimbursementsByIdTable');
    reimIdTable.innerHTML = `
        <row id="th-row-of-reim-status">
                <th class="reim-columns" >ID</th>
                <th class="reim-columns" >Author</th>
                <th class="reim-columns" >Amount</th>
                <th class="reim-columns" >Date Submitted</th>
                <th class="reim-columns" >Date Resolved</th>
                <th class="reim-columns" >Description</th>
                <th class="reim-columns" >Resolver</th>
                <th class="reim-columns" >Status</th>
                <th class="reim-columns" >Type</th>
        </row>`;

    for (var i = 0; i < response.length; i++) {
        const row = document.createElement('row');
        for(let c of Object.values(response[i]) ){
            const td = document.createElement('td');
            td.innerText = c;
            td.className = 'reim-columns';
            row.appendChild(td);
        }
        reimIdTable.appendChild(row);
    }
    reimIdTable.style.display='block';   
}
     catch {
        alert("Not found")
    }
}


async function createTableForReimByUserId() {
    const userId = document.getElementById('reim-by-user-id-input').value;
    console.log('following is the UserId', userId);// selected value is correct
    const payload = await fetch(`http://localhost:3000/reimbursement/author/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }       
      })
    
    try {
        const response = await payload.json();
        const reimIdTable = document.getElementById('getReimbursementsByUserIdTable');
    reimIdTable.innerHTML = `
        <row id="th-row-of-reim-status">
                <th class="reim-columns" >ID</th>
                <th class="reim-columns" >Author</th>
                <th class="reim-columns" >Amount</th>
                <th class="reim-columns" >Date Submitted</th>
                <th class="reim-columns" >Date Resolved</th>
                <th class="reim-columns" >Description</th>
                <th class="reim-columns" >Resolver</th>
                <th class="reim-columns" >Status</th>
                <th class="reim-columns" >Type</th>
        </row>`;

    for (var i = 0; i < response.length; i++) {
        const row = document.createElement('row');
        for(let c of Object.values(response[i]) ){
            const td = document.createElement('td');
            td.innerText = c;
            td.className = 'reim-columns';
            row.appendChild(td);
        }
        reimIdTable.appendChild(row);
    }
    reimIdTable.style.display='block';   
}
     catch {
        alert("Not found")
    }
}
//ret-user-id

async function createNewReimbursementInfo() {
   const reimType = document.getElementById('reim-type-selection').value; //grabbing values input from user
    const amount = parseInt(document.getElementById('reimbursement-amt').value) ;
    const newReimDate = document.getElementById('reimbursement-date').value;
    const description = document.getElementById('reimbursement-text').value;
    const payload = await fetch('http://localhost:3000/reimbursement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
//Below, assigning new values entered by the user on the web page      
      body: JSON.stringify({
        amount: amount,
        dateSubmitted : newReimDate,
        description : description,
        status: 1,
        type: reimType
        })
    }) 
    const response = await payload.json();
    const list = document.createElement('ul');  //creating a ul to populate with li items below
    list.className = 'new-reim-ul'; // assigning the ul a class for styling.
    // To out result, will loop thru the object with key/value pairs
        for(i = 0; i < Object.keys(response).length; i++) {
            if( Object.values(response)[i] ) {
                const prop = document.createElement('li');
                prop.className = 'new-reim-li';
                prop.innerText=`${Object.keys(response)[i]} :${Object.values(response)[i]}`;
                list.appendChild(prop);
            }
        }
        document.getElementById('submit-new-reim-response').innerHTML = list.innerHTML;
        document.getElementById('submit-new-reim-response').style.visibility = "visible";
        document.getElementById('submitNewReimBtn').style.visibility = "hidden"; 
        document.getElementById('newReimBtn').style.visibility = "visible";
               
}
function clearCreateNewReimb() {
    const empty = " ";
    document.getElementById('submit-new-reim-response').innerHTML = empty;
    document.getElementById('reim-type-selection').value = 1;
    document.getElementById('reimbursement-amt').value = empty;
    document.getElementById('reimbursement-date').value = empty;
    document.getElementById('reimbursement-text').value = empty;
    document.getElementById('newReimBtn').style.visibility = "hidden";
    document.getElementById('submitNewReimBtn').style.visibility = "visible";
}


//update user code begins here:
async function getUserByIdForUpdate() {
    const userId = document.getElementById('id4update').value; //successfully grabs the user input id number
    const payload = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }       
      })
      const response = await payload.json();
    newObject = Object.values(response);  //successfully grabs called user object from response
    console.log('is this new object?', newObject);
    // the below successfully grabs the user object username
    let oldUsername = newObject[1];
    let oldFirstname = newObject[2];
    let oldLastname = newObject[3];
    let oldEmail = newObject[4];
    let oldRole = newObject[5];

    document.getElementById('update-username-input').value = oldUsername;//populates the input box!
    document.getElementById('update-firstname-input').value = oldFirstname;
    document.getElementById('update-lastname-input').value = oldLastname;
    document.getElementById('update-email-input').value = oldEmail;
    document.getElementById('update-role-input').value = oldRole;
    document.getElementById('after-Success-User-Update-info').innerText = ' ';

}

// Below begins the get Reimbursement by ID for Update Reimbursement
async function getReimbursementByIdForUpdate() {
    const reimbursementId = document.getElementById('id4updateReim').value; //successfully grabs the user input id number
    //console.log(reimbursementId, 'is this reimbursementId?') //working so far
    const payload = await fetch(`http://localhost:3000/reimbursement/${reimbursementId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }       
    })
    const response = await payload.json();
    console.log('is this the reimbursement payload', response);
    newObject = Object.values(response); //grabs correct object.
    
    let oldAuthor = newObject[1];
    let oldAmount = newObject[2];
    let oldDescription = newObject[5];
    let oldResolver = newObject[6];
    let oldStatus = newObject[7];
    let oldType = newObject[8];

    document.getElementById('update-author-input').value = oldAuthor;//populates the input box!
    document.getElementById('update-amount-input').value = oldAmount;
    document.getElementById('update-description-input').value = oldDescription;
    document.getElementById('update-resolver-input').value = oldResolver;
    document.getElementById('update-status-input').value = oldStatus;
    document.getElementById('update-type-input').value = oldType;
    document.getElementById('reim-confirmed').innerText = ' ';
}

// Update Reimbursement begins here:
async function submitReimbursementUpdate() {
    const reimbursementId = document.getElementById('id4updateReim').value; 
    const reimbursementAuthor = document.getElementById('update-author-input').value; 
    const reimbursementAmount = document.getElementById('update-amount-input').value; 
    const reimbursementDateResolved = document.getElementById('update-resolved-date-input').value; 
    const reimbursementDescription = document.getElementById('update-description-input').value; 
    const reimbursementResolver = document.getElementById('update-resolver-input').value; 
    const reimbursementStatus = document.getElementById('update-status-input').value; 
    const reimbursementType = document.getElementById('update-type-input').value;
    
    //console.log(reimbursementId, 'is this reimbursementId?') //working so far
    const payload = await fetch(`http://localhost:3000/reimbursement`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({           
                reimbursementId: reimbursementId,
                author: reimbursementAuthor,
                amount: reimbursementAmount,
                dateResolved: reimbursementDateResolved,
                description: reimbursementDescription,
                resolver: reimbursementResolver,
                status: reimbursementStatus,
                type: reimbursementType
            })               
    })
    const response = await payload.json();
    
    console.log('is this the reimbursement payload', response);
    newObject = Object.values(response); //grabs correct object.
    
    let oldAuthor = newObject[1];
    let oldAmount = newObject[2];
    let oldDescription = newObject[5];
    let oldResolver = newObject[6];
    let oldStatus = newObject[7];
    let oldType = newObject[8];
    const empty = "";
    document.getElementById('update-author-input').value = empty;//populates the input box!
    document.getElementById('update-amount-input').value = empty;
    document.getElementById('update-resolved-date-input').value = empty;
    document.getElementById('update-description-input').value = empty;
    document.getElementById('update-resolver-input').value = empty;
    document.getElementById('update-status-input').value = empty;
    document.getElementById('update-type-input').value = empty;
    document.getElementById('id4updateReim').value = empty;
    alert("Update Submitted Successfully!\
    Select another reimbursement to update at the top of this page.'");
   //document.getElementById('submit-update-reim-btn').style.visibility = 'hidden';
    //document.getElementById('reim-confirmed').style.visibility = 'visible';
    //document.getElementById('reim-confirmed').innerText='Select antop of this page.';
}


// Update User begins here:
async function submitUserUpdate() {
    const userId = document.getElementById('id4update').value; //from getuserbyid input
    const username = document.getElementById('update-username-input').value; 
    const firstname = document.getElementById('update-firstname-input').value; 
    const lastname = document.getElementById('update-lastname-input').value; 
    const email = document.getElementById('update-email-input').value; 
    const role = document.getElementById('update-role-input').value;
    const empty = " "; // used to clear inputs after successful update.
    
    //console.log(reimbursementId, 'is this reimbursementId?') //working so far
    const payload = await fetch(`http://localhost:3000/users`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({           
                userId: userId,
                userName: username,
                firstName: firstname,
                lastName: lastname,
                email: email,
                role: role,
            })               
    })
    const response = await payload.json();
    
    console.log('is this the user payload', response);
    newObject = Object.values(response); //grabs correct object.
    
    let oldUsername = newObject[1];
    let oldFirstname = newObject[2];
    let oldLastname = newObject[3];
    let oldEmail = newObject[4];
    let oldRole = newObject[5];
    
    /*document.getElementById('update-username-input').value = oldUsername;//populates the input box!
    document.getElementById('update-firstname-input').value = oldFirstname;
    document.getElementById('update-lastname-input').value = oldLastname;
    document.getElementById('update-email-input').value = oldEmail;
    document.getElementById('update-role-input').value = oldRole; */
    
    document.getElementById('update-username-input').value = empty;//populates the input box!
    document.getElementById('update-firstname-input').value = empty;
    document.getElementById('update-lastname-input').value = empty;
    document.getElementById('update-email-input').value = empty;
    document.getElementById('update-role-input').value = empty;
    document.getElementById('id4update').value = empty;
    alert("Update Submitted Successfully!");
    document.getElementById('after-Success-User-Update-info').innerText='Update Successful. To update another user, input a UserId at the top of this page.';
    document.getElementById('after-Success-User-Update-info').style.visibility = 'visible';
}
//reim-by-user-id-btn

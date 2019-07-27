
//document.getElementById("loginBtn").addEventListener("click", toMainBody);
document.getElementById("loginBtn").addEventListener("click", loginChecker);
document.getElementById("employee-info-btn").addEventListener("click", toGetEmployeeInfo);
document.getElementById("get-all-users-btn").addEventListener("click", createTableForAllUsers);
document.getElementById("create-new-reimb").addEventListener("click", toCreateNewReimb);
document.getElementById("get-update-user-btn").addEventListener("click", toUpdateUser);
document.getElementById("get-reim-by-status-btn").addEventListener("click", toGetReimByStatus);
document.getElementById("choosing-status-btn").addEventListener("click", createTableForReimByStatus);
document.getElementById("get-reim-by-id-btn").addEventListener("click", toGetReimById);
document.getElementById("choosing-reim-by-id-btn").addEventListener("click", createTableForReimById);
document.getElementById("update-reims-btn").addEventListener("click", toUpdateReims);




//async function loginChecker(username,pswd) {
async function loginChecker() {
    var a = document.getElementById('usernameInput').value;
    var b = document.getElementById('passwordInput').value;
    console.log('username is', a, "and pswd is", b); // this works
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
        //console.log(response);
        document.getElementById('ret-user-id').innerText = response.userInfo.userName;
        document.getElementById('ret-first-name').innerText = response.userInfo.firstName;
        document.getElementById('ret-last-name').innerText = response.userInfo.lastName;
        document.getElementById('ret-email').innerText = response.userInfo.email;
        toMainBody();
    }
}

function toMainBody() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("nav-content-container").style.display="flex";
    document.getElementById("navBar").style.display="block";
    document.getElementById("content-area").style.visibility="visible";
    document.getElementById("outer-content-getEmployeeInfo").style.display="block"   
}

function toGetEmployeeInfo() {
    document.getElementById("indexContentDiv").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
   //document.getElementById("outer-content-getUserById").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "none";
    //document.getElementById("outer-content-getAllReims").style.display = "none";
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
   //document.getElementById("outer-content-getAllReims").style.display = "none";
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
    //document.getElementById("outer-content-getAllReims").style.display = "none";
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
    //document.getElementById("outer-content-getAllReims").style.display = "none";
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
    //document.getElementById("outer-content-getAllReims").style.display = "none";
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
    //document.getElementById("outer-content-getAllReims").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "block";   
}
/*function toGetAllReims() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimByType").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none"; 
    document.getElementById("outer-content-getAllReims").style.display = "block";  
} */
function toUpdateReims() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimById").style.display = "none";
    //document.getElementById("outer-content-getAllReims").style.display = "none";  
    document.getElementById("outer-content-updateReims").style.display = "block";  
}
// export default toMainBody;

async function createTableForAllUsers() {
    const payload = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }       
      })
      const response = await payload.json();
    const userTable = document.getElementById('getAllUsersTable');
    userTable.innerHTML = `
        <row id="th-row-of-all-users">
                <th class="user-columns" >User ID</th>
                <th class="user-columns" >Username</th>
                <th class="user-columns" >First Name</th>
                <th class="user-columns" >Last Name</th>
                <th class="user-columns" >Last Name</th>
                <th class="user-columns" >Role</th>
        </row>`;
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

      
/*function getStatusValue() {
    const selectedStatus = document.getElementById('reim-status-selection');//this works
    console.log(selectedStatus.value);// use the .value
} */
async function createTableForReimByStatus() {
    const selectedStatus = document.getElementById('reim-status-selection');//this works
    //console.log(selectedStatus.value);// selected value is correct
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
    //const payload = await fetch(`http://localhost:3000/reimbursement/author/`, {
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
      console.log("Asbury Park");
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
        console.log("helloo words");
}
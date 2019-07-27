
//document.getElementById("loginBtn").addEventListener("click", toMainBody);
document.getElementById("loginBtn").addEventListener("click", loginChecker);
document.getElementById("employee-info-btn").addEventListener("click", toGetEmployeeInfo);
document.getElementById("get-all-users-btn").addEventListener("click", createTableForAllUsers);
//document.getElementById("get-all-users-btn").addEventListener("click", toGetAllUsers);
document.getElementById("create-new-reimb").addEventListener("click", toCreateNewReimb);
//document.getElementById("get-user-by-Id-btn").addEventListener("click", toGetUserById);
document.getElementById("get-update-user-btn").addEventListener("click", toUpdateUser);
document.getElementById("get-reim-by-status-btn").addEventListener("click", toGetReimByStatus);
document.getElementById("get-reim-by-type-btn").addEventListener("click", toGetReimByType);
document.getElementById("get-all-reims-btn").addEventListener("click", toGetAllReims);
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
    document.getElementById("outer-content-getReimByType").style.display = "none";
    document.getElementById("outer-content-getAllReims").style.display = "none";
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
    document.getElementById("outer-content-getReimByType").style.display = "none";
    document.getElementById("outer-content-getAllReims").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-getAllUsers").style.display="block";
}
function toCreateNewReimb() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none"; 
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimByType").style.display = "none";
    document.getElementById("outer-content-getAllReims").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-createNewReImbursement").style.display = "block";    
}
/* function toGetUserById() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimByType").style.display = "none";
    document.getElementById("outer-content-getAllReims").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-getUserById").style.display = "block";    
} */
function toUpdateUser() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimByType").style.display = "none";
    document.getElementById("outer-content-getAllReims").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "block";   
}
function toGetReimByStatus() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByType").style.display = "none";
    document.getElementById("outer-content-getAllReims").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "block";   
}
function toGetReimByType() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getAllReims").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none";
    document.getElementById("outer-content-getReimByType").style.display = "block";   
}
function toGetAllReims() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimByType").style.display = "none";
    document.getElementById("outer-content-updateReims").style.display = "none"; 
    document.getElementById("outer-content-getAllReims").style.display = "block";  
}
function toUpdateReims() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getEmployeeInfo").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-updateUser").style.display = "none";
    document.getElementById("outer-content-getReimByStatus").style.display = "none";
    document.getElementById("outer-content-getReimByType").style.display = "none";
    document.getElementById("outer-content-getAllReims").style.display = "none";  
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
        console.log(response);
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

        

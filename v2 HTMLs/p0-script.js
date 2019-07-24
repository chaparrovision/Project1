
document.getElementById("loginBtn").addEventListener("click", toMainBody);
document.getElementById("get-all-users-btn").addEventListener("click", toGetAllUsers);
document.getElementById("create-new-reimb").addEventListener("click", toCreateNewReimb);
document.getElementById("get-user-by-Id-btn").addEventListener("click", toGetUserById);
document.getElementById("get-update-user-btn").addEventListener("click", toUpdateUser);//resume
               
function toMainBody() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("nav-content-container").style.display="flex";
    document.getElementById("navBar").style.display="block";
    document.getElementById("content-area").style.visibility="visible";
    document.getElementById("outer-content-createNewReImbursement").style.display="block"
    
}
function toGetAllUsers() {
    document.getElementById("indexContentDiv").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-getUserById").style.display = "none";
    document.getElementById("outer-content-getAllUsers").style.display="block";
}
function toCreateNewReimb() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none"; 
    document.getElementById("outer-content-getUserById").style.display = "none";  
    document.getElementById("outer-content-createNewReImbursement").style.display = "block";
    
}
function toGetUserById() {
    document.getElementById("indexContentDiv").style.display="none";
    document.getElementById("outer-content-getAllUsers").style.display="none";   
    document.getElementById("outer-content-createNewReImbursement").style.display = "none";
    document.getElementById("outer-content-getUserById").style.display = "block";
    
}



document.getElementById("loginBtn").addEventListener("click", toMainBody);
document.getElementById("employee-info-btn").addEventListener("click", toGetEmployeeInfo);
document.getElementById("get-all-users-btn").addEventListener("click", toGetAllUsers);
document.getElementById("create-new-reimb").addEventListener("click", toCreateNewReimb);
//document.getElementById("get-user-by-Id-btn").addEventListener("click", toGetUserById);
document.getElementById("get-update-user-btn").addEventListener("click", toUpdateUser);
document.getElementById("get-reim-by-status-btn").addEventListener("click", toGetReimByStatus);
document.getElementById("get-reim-by-type-btn").addEventListener("click", toGetReimByType);
document.getElementById("get-all-reims-btn").addEventListener("click", toGetAllReims);
document.getElementById("update-reims-btn").addEventListener("click", toUpdateReims);//resume
               
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
    //document.getElementById("outer-content-getUserById").style.display = "none";
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

if(!sessionStorage.getItem("count")){
    sessionStorage.setItem("count", 0);
}else{
    let sessionCount = parseInt(sessionStorage.getItem("count"));
    let sessionDoc = document.querySelector(".session-count");
    sessionDoc.textContent = sessionCount;
}
if(!localStorage.getItem("count")){
    localStorage.setItem("count", 0);
}else{
    let localCount = parseInt(localStorage.getItem("count"));
    let localDoc = document.querySelector(".local-count");
    localDoc.textContent = localCount;
}

function increaseSessionCount(){
    let sessionCount = parseInt(sessionStorage.getItem("count"));
    let sessionDoc = document.querySelector(".session-count");
    sessionDoc.textContent = sessionCount+1;
    sessionStorage.setItem("count", sessionCount+1);
}

function increaseLocalCount(){
    let localCount = parseInt(localStorage.getItem("count"));
    let localDoc = document.querySelector(".local-count");
    localDoc.textContent = localCount+1;
    localStorage.setItem("count", localCount+1);
    console.log(localCount);
}
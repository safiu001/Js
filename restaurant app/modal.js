let modal = document.querySelector(".modal");
let span = document.querySelector(".close");

span.onclick = function(){
    modal.style.display="none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display="none";
    }
}

if(sessionStorage.getItem("table1")){
    let tableClassNames = ["table1", "table2", "table3", "table4"];
    for(let tableClassName of tableClassNames){
        let element = document.querySelector("."+tableClassName);
        element.onclick = function(){
            modal.style.display="block";
            let tempStore = JSON.parse(sessionStorage.getItem(tableClassName));
            fillTable(tempStore);
        }
    }
}

function fillTable(tempStore){
    let tableBody = document.querySelector(".table-body");
}
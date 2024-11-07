const container = document.getElementById("container");

function makeGrid(num){
    if(num >= 100){
        alert("Please Enter a Number less than 100!");
        return;
    }
    else{
        
        for(let i = 0; i <num; i++){
            const col = document.createElement("div");
            col.classList.add("col");
            container.appendChild(col);
            for(let j = 0; j < num; j++){
                const row = document.createElement("div");
                row.classList.add("row");
                col.appendChild(row);
            }
        }
    }
}

const button = document.querySelector("#btn");
button.addEventListener("click",() => {
    let number = prompt("Please enter number of square per side (Max 100)");
    container.replaceChildren();
    makeGrid(number);
});


const container = document.getElementById("container");

function makeGrid(){
    for(let i = 0; i <16; i++){
        const col = document.createElement("div");
        col.classList.add("col");
        
        container.appendChild(col);
        for(let j = 0; j < 16; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            row.textContent = i+1;
            col.appendChild(row);
        }
        
    }
}

makeGrid();
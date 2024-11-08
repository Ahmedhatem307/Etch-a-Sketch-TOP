const container = document.getElementById("container");
const button = document.querySelector("#btn");
let mouseDown = false

//to keep tracking if mouse is kept pressed or not
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


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
                row.addEventListener("mouseover",function(){
                    //if the button is pressed the canvas is colored
                    if(mouseDown)
                    row.style.backgroundColor = randomColor();
                });
                col.appendChild(row);
            }
        }
    }
}

button.addEventListener("click",() => {
    let number = prompt("Please enter number of square per side (Max 100)");
    container.replaceChildren();
    makeGrid(number);
});

//generate a random color to be selected
function randomColor() {
    let color = [];

    for(let i=0;i<3;i++){
        color.push(Math.floor(Math.random()*256));
    }
    return 'rgb(' + color.join(',') + ')';
}

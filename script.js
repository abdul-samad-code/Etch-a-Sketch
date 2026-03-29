console.log("hello world");


const container = document.querySelector(".container");



function createGrid() {
 let size = prompt("Enter the grid size: ");
 size = Number(size);

 if (size>100) {
    alert("max result is 100");
    return;
 }
 container.innerHTML= "";
 const squareSize = 960/size;

 for(let i = 0; i < size*size; i++){
    const div = document.createElement("div");

    div.classList.add("square");

    div.style.height=`${squareSize}px`;
    div.style.width=`${squareSize}px`;

    div.addEventListener("mouseover", function(){
        div.style.backgroundColor="black";
    })
    container.appendChild(div);
 }
    
}

// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 200; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!



const colors = document.querySelectorAll(".color");
console.log(colors)
const currentColor = document.querySelector("#current-color");
for (let color of colors){
  const onClick = color.addEventListener("click", (event) => {
    console.log('Im inside the event');
    
    currentColor.style.background = event.target.style.background;
    
    console.log(currentColor);
    
})
}

const canvas = document.querySelector("#canvas")
const cells = document.querySelectorAll(".cell");

for (let cell of cells) {
  cell.addEventListener("click", (event) =>{
    console.log('Im in this event too');
    cell.style.background = currentColor.style.background;
  })
} 
for (let cell of cells) {
    cell.addEventListener("dragover", (event) =>{
      console.log('Im in this event too');
      cell.style.background = currentColor.style.background;
    })
}


 
   

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", ()=>{
     let inputBox = document.createElement("p");
     let img = document.createElement("img");
     inputBox.className = "input-box";
     inputBox.setAttribute("contenteditable", "true");
     img.src = "https://www.pngarts.com/files/4/Delete-Button-PNG-Background-Image.png"
     notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})







function rain() {
    let drop = document.createElement("div");
  
    drop.classList.add("drop");
    drop.innerText = "|";
  
    drop.style.right = Math.random() * 100 + "vw";
  
    drop.style.animationDuration = Math.floor(Math.random() * 4500) + "ms";
  
    document.body.appendChild(drop);
  }
  
  setInterval(rain, 900);
  
  setTimeout(() => {
    drop.classList.remove();
  }, 1000);
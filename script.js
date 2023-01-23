const squares = document.querySelectorAll('.square')
const draggable = document.querySelector('.draggable')

draggable.addEventListener('dragstart', ()=>{
    draggable.style.border = "2px solid #eee"
    setTimeout(() => {
        draggable.style.display = "none"
        
    }, 0);
})
draggable.addEventListener('dragend', ()=>{
    draggable.style.display = "block"
})

squares.forEach((square)=>{
    square.addEventListener("dragover", (e)=>{
        e.preventDefault()
    })
    square.addEventListener("dragenter", (e)=>{
        e.preventDefault()
        square.className += ' active'
    })
    square.addEventListener("dragleave", ()=>{
        square.className ="square"
    })
    square.addEventListener("drop", ()=>{
        square.className ="square"
        square.append(draggable)
    })
})
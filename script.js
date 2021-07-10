const buttons = document.querySelectorAll('.btn')
//const reset = document.querySelector('#reset')

buttons.forEach((button)=>{button.addEventListener('click',()=>{
    userSelect = button.id
    if(userSelect == 'reset'){
        console.log('hi you hav clicked this btn')
        var numberInput = prompt("Please enter a value for the size of your new grid", "16")
        clearGrid()
        makeRows(numberInput,numberInput)
    }
}
)})

function changeColor(e){
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  }
  var gridPixel = container.querySelectorAll('div')
  gridPixel.forEach(gridPixel => gridPixel.addEventListener('mouseover', changeColor))

}

function clearGrid(){
    container.innerHTML = ''
}
makeRows(16, 16)
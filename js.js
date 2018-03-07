const oneBox = document.createElement('div');
const canvas = document.getElementById('canvas');
const changeGridButton = document.getElementById('change-grid-size');
const randomCheckbox = document.getElementById('randomcheckbox')

const color = document.querySelector('.colorinput');


changeGridButton.addEventListener('click', () => {
	let gridSize = prompt('What grid size u want?')
	clearGrid()
	createGrid(gridSize)


	const everyPixel = document.querySelectorAll('.one-box');
	everyPixel.forEach(pixel => pixel.addEventListener('mousemove', giveColor, (e) => {
	} ))

})

function createGrid(grid){
	canvas.style.cssText = `grid-template-columns:repeat(${grid},1fr)`
	for (let i = 0; i < (grid * grid); i++) {
		const oneBox = document.createElement('div');
		oneBox.classList.add('one-box');
		canvas.appendChild(oneBox);
	} 	
}

//clears the grid if its full

function clearGrid() {
	if (canvas.querySelector('.one-box') != null) {
	document.querySelectorAll('.one-box').forEach(e => canvas.removeChild(e));
	}
}



function giveColor() {

	if (value == true){
		if (randomCheckbox.checked == true) {
			let a = Math.floor(Math.random()*255)
			let b = Math.floor(Math.random()*255)
			let c = Math.floor(Math.random()*255)
			this.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
		} else { 
			this.style.backgroundColor = `${color.value}`
		}
}
	return
}

let value;

canvas.addEventListener('mousedown', (event) => {
		value = true
		event.preventDefault()
	})

canvas.addEventListener('mouseup', (event) => {
		value = false

	})








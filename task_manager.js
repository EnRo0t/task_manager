let contador = 0;
const taskManager = document.getElementById("taskManager");
const newTaskBtn = document.getElementById("newTaskBtn");

function setupSubmit(submitBtn, input) {
	submitBtn.addEventListener('click', () => {
		input.disabled = true;
	});
}

// Configurar la tarea inicial (task0)
setupSubmit(
	document.querySelector(".submitBtn"),
	document.getElementById("task0")
);

newTaskBtn.addEventListener('click', () => {
	contador++;
	const newTask = `
		<input class="task" id="task${contador}">
		<div class="timerInfo">
			<h1 id="hours">00</h1>
			<h1 id="minutes">00</h1>
			<h1 id="seconds">00</h1>
			<h1 id="secTenth">00</h1>
		</div>
		<div class="buttonContainer">
		    <button id="start" class="startBtn">Start</button>
		    <button id="pause" class="pauseBtn">Pause</button>
		    <button id="stop" class="stopBtn">Stop</button>
		    <button class="submitBtn">Submit</button>
		</div>
		`;
taskManager.insertAdjacentHTML("beforeend", newTask);

// Configurar la nueva tarea recién creada
// Crear un array de los inputs y de los botones submit
const inputs = taskManager.querySelectorAll(".task");
const submitBtns = taskManager.querySelectorAll(".submitBtn");
// Selecciona el último input/submitBtn creado
const lastInput = inputs[inputs.length - 1];
const lastSubmit = submitBtns[submitBtns.length - 1];
// Ejecuta la función para ambos
setupSubmit(lastSubmit, lastInput);});

/*------------------------------------------------------------*/
/*						   STOPWATCH						  */
/*------------------------------------------------------------*/

// Selectores botones 
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let stopBtn = document.getElementById("stop");

// Selectores crono 
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let secTenth = document.getElementById("secTenth");

// Instanciar timer
var timer = new easytimer.Timer();

// Actualizador timer 
timer.addEventListener('secondTenthsUpdated', () => {
		// Crea un obj que contendrá los valores del timer
		const obj = timer.getTimeValues();
		// Añade los valores a los h1's del crono
		hours.innerText = obj.hours.toString().padStart(2, '0');
		minutes.innerText = obj.minutes.toString().padStart(2, '0');
		seconds.innerText = obj.seconds.toString().padStart(2, '0');
		secTenth.innerText = obj.secondTenths.toString().padStart(2, '0');

});

// Eventos botones
startBtn.addEventListener('click', () => {
		timer.start({
				precision: 'secondTenths'
		});
});

pauseBtn.addEventListener('click', () => {
		timer.pause();
});

stopBtn.addEventListener('click', () => {
		timer.stop();
});

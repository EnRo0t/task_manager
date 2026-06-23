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
		<div class="crono">00:00:00</div>
		<div class="buttonContainer">
			<button class="startBtn">Start</button>
			<button class="stopBtn">Stop</button>
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

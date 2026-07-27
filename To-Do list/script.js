let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        return;
    }

    let task = {
        id: Date.now(),
        text: input.value,
        completed: false
    };

    tasks.push(task);

    input.value = "";

    displayTasks();
}


function displayTasks() {
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {

        let li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>

            <div>
                <button onclick="completeTask(${task.id})">
                    ✓
                </button>

                <button onclick="removeTask(${task.id})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });

    updateCounters();
}


function completeTask(id) {

    tasks = tasks.map(task => {

        if(task.id === id){
            task.completed = true;
        }

        return task;
    });

    displayTasks();
}


function removeTask(id) {

    tasks = tasks.filter(task => 
        task.id !== id
    );

    displayTasks();
}


function updateCounters(){

    let total = tasks.length;

    let completed = tasks.filter(task =>
        task.completed
    ).length;


    document.getElementById("totalTasks").textContent = total;

    document.getElementById("completedTasks").textContent = completed;
}
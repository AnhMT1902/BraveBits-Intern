function addTasks() {
    let listTasks = JSON.parse(localStorage.getItem('listTasks')) || [];
    const backlogInput = document.querySelector("#todo-input");
    let inputValue = backlogInput.value;
    if (inputValue.trim() !== "") {
        let task = {
            content: inputValue.trim(), time: '', status: true
        }
        listTasks.push(task);
        localStorage.setItem('listTasks', JSON.stringify(listTasks));
        renderTasks();
    }
}

function renderTasks() {
    let listTasks = JSON.parse(localStorage.getItem('listTasks'));
    let htmlTasks = ""
    listTasks?.map((task, index) => {
        htmlTasks += `
            <div class="task">
                <div class="task-number">
                    ${index + 1}
                </div>
                <div class="task-right">
                    ${task.status ? `<div class="task-content">
                        ${task.content}
                    </div>` : `<div class="task-content task-done">
                        ${task.content}
                    </div>`}
                    ${!task.status ? `<div class="task-icon">
                     <div>
                          <button class="btn-icon btn-disable" onclick="deleteTask(${index})" ">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor"
                                    class="bi bi-trash3-fill btn-disable" viewBox="0 0 16 16">
                                    <path
                                        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                               </svg>
                          </button>
                     </div>
            </div>` : `<div class="task-icon">
                 <div>
                      <button class="btn-icon" onclick="checkDoneTask(${index})">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                                <path
                                        d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                <path
                                        d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                           </svg>
                      </button>
                 </div>
                 <div>
                      <button class="btn-icon" onclick="showDetailTasks('${task.content}', ${index})">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                           </svg>
                       </button>
                 </div>
                 <div>
                      <button class="btn-icon btn-edit" onclick="deleteTask(${index})">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor"
                                class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path
                                            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                           </svg>
                      </button>
                 </div>
            </div>`}
         </div>
     </div>`
    })
    document.querySelector("#backlog-list").innerHTML = htmlTasks;
    document.querySelector("#todo-input").value = '';
}

function checkDoneTask(index) {
    let listTasks = JSON.parse(localStorage.getItem('listTasks'));
    listTasks[index].time = getTimeNow()
    listTasks[index].status = false;
    localStorage.setItem('listTasks', JSON.stringify(listTasks));
    renderTasks();
}

function showDetailTasks(value, index) {
    let inputEdit = document.querySelector("#todo-input");
    const buttonEdit = document.querySelector("#todo-button");
    inputEdit.placeholder = 'Please re-enter the information'
    inputEdit.value = value;
    buttonEdit.innerHTML = "Edit"
    buttonEdit.setAttribute("onclick", `saveTaskEdit(${index})`);
}

function saveTaskEdit(index) {
    const tasks = JSON.parse(localStorage.getItem('listTasks'));
    let valueEdit = document.querySelector("#todo-input");
    tasks[index].content = valueEdit.value
    localStorage.setItem('listTasks', JSON.stringify(tasks));
    main();
}

function deleteTask(index) {
    let listTasks = JSON.parse(localStorage.getItem('listTasks'));
    let result = confirm("Are you sure you want to delete this task?");
    if (result) {
        listTasks.splice(index, 1);
        localStorage.setItem('listTasks', JSON.stringify(listTasks));
        renderTasks();
    }
}

function getTimeNow() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function main() {
    document.querySelector("#body-task").innerHTML = `
        <div class="input-group t-10 mt-10">
            <input type="text" id="todo-input" class="form-control" placeholder="Add task?"
                aria-label="Recipient's username" aria-describedby="button-addon2">
            <button id="todo-button" class="btn btn-outline-secondary ripple" onclick="addTasks()">New Task</button>
        </div>
    <div id="backlog-list">
    </div>`;
    renderTasks()
}

main();


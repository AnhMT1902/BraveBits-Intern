const backlogForm = document.querySelector("#todo-form");
const backlogInput = document.querySelector("#todo-input");
const backlogList = document.querySelector("#backlog-list");


backlogForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValue = backlogInput.value;

    console.log(inputValue, 1);
    if (inputValue.trim() !== "") {
        const listItem = document.createElement("div");
        listItem.innerText = inputValue;
        console.log(listItem)
        backlogList.appendChild(listItem);
        backlogInput.value = "";
    }
});

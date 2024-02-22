let Todos1 = [];
let Todos2 = [];
let todoObject = {
    todoNote: "",
    todoDate: ""
};
function clearTodo() {
    let todoInput = document.getElementById('Todo2');
    if (todoInput) {
        todoInput.value = "";
    } else {
        console.error("Input element with id 'Todo2' not found");
    }
}

function getTodo2(){
    let todo = document.getElementById('Todo2');
    let todoDate = document.querySelector('.dateCalender');
    let todoObject = {
    todoNote:todo.value,
    todoDate:todoDate.value
    }
    Todos2.push(todoObject);
    // console.log(Todos2);
    let todo_list = "";
    for(let i = 0 ; i < Todos2.length ; i++){
        // console.log(Todos2);

        todo_list +=`
        <div class="input-box">
            ${Todos2[i].todoNote}
        </div>
        <div class="todolistdiv">
            ${Todos2[i].todoDate}
        </div>
        <div>
          <button class="deleteButton" style="margin-left:0px;" onclick="
          Todos2.splice(${i},1);
          renderList();
          ">Delete</button>
        </div>`;
    }
    let ele = document.querySelector('.TodoList-array');
    if (ele) {
        ele.innerHTML = todo_list;
    } else {
        console.error("Element with class 'TodoList-array' not found");
    }
}
function renderList(){
    let todo_list = "";

    for(let i = 0 ; i < Todos2.length  ; i++){
    
            todo_list +=`
            <div class="input-box">
                ${Todos2[i].todoNote}
            </div>
            <div>
                ${Todos2[i].todoDate}
            </div>
            <div>
              <button class="deleteButton" style="margin-left:0px;" onclick="
              Todos2.splice(${i},1);
              renderList();
              ">Delete</button>
            </div>`;
       
    }
    let ele = document.querySelector('.TodoList-array');
    if (ele) {
        ele.innerHTML = todo_list;
    } else {
        console.error("Element with class 'TodoList-array' not found");
    }
}
// function deleteTodo(i){
//     console.log(typeof i);

//     let todo_list = "";
//     for(let i = 0 ; i < Todos2.length ; i++){
//         // console.log(Todos2);

//         todo_list += `<p class="todoParagraph" style="color: blue; display: inline-block">${Todos2[i].todoNote}</p>
//         <button class="deleteButton" onclick="Todos2.splice(${i},1);getTodo2();">Delete</button>`;

//     }
//     let ele = document.querySelector('.TodoList-array');
//     if (ele) {
//         ele.innerHTML = todo_list;
//     } else {
//         console.error("Element with class 'TodoList-array' not found");
//     }
// }

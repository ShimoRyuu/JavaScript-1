const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');

let todos = [];

//hämtar todos från databasen och restricts till 10
const fetchTodos = () => {
    fetch('http://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
    .then(res => res.json())
    .then(data => {
        todos = data;
        console.log(todos);
        listTodos();
    })
}

fetchTodos();

const newTodo = (todo) => {
    let card = document.createElement('div');
    card.classList.add('card', 'p-3', 'my-3', 'todo');

    let innerCard = document.createElement('div');
    innerCard.classList.add('d-flex', 'justify-content-between', 'align-items-center');

    let title = document.createElement('h3');
    title.classList.add('title');
    title.innerText = todo.title;

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.innerText = 'X';
    button.addEventListener('click', () => console.log('todo.id'))

    innerCard.appendChild(title);
    innerCard.appendChild(button);
    card.appendChild(innerCard);
    output.appendChild(card);

}



const listTodos = () => {
    output.innerHTML = '';
    todos.forEach(todo => {

        newTodo(todo);
    })
}

//laddar upp nya todos i databasen och stringifierar och lägger nya todos överst

const createTodo = (title) => {

    fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title,
            completed: false
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        todos.unshift(data);
        listTodos();
    })
}
//validering
const validateTodo = () => {
    if(input.value === '') {
        input.classList.add('is-invalid');
        error.innerText = ('This field cannot be empty!')
    } else {
        input.classList.remove('is-invalid');
        error.innerText = ('');
        createTodo(input.value);
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    // if (input.value.length == 0) {
    //     alert('todo får inte vara tomt')
    //     return false;
    // }
   

    validateTodo();
    form.reset();
    console.log(todos)
    // createTodo(input.value);
    // input.value = '';

    
})


// output.addEventListener('click', e => {
//     if(e.target.classList.contains('btn-danger')) {
//         deleteTodo(e.target.parentNode.id)
//     }
// }
// )
// const deleteTodo = id => {
//     todos = todos.filter(todo => todo.id != id);
//     listTodos(todos);
// }
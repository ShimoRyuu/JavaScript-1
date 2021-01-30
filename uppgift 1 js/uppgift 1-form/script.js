const form = document.querySelector('#form'); // referens till vårt formulär
 //referenser till vårat output som vi ska använda
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const output = document.querySelector('#output'); //referenser till vårat output som vi ska använda


let users = [];

// const addUser = (output) => {

//     output.innerHTML = '';
//     users.forEach(user => {
//         let html = `
//         <div class="user">
//                 <div class="text">
//                     <h3>${user.firstName} ${user.lastName}</h3>
//                     <small>${user.email}</small>
//                 </div>
//                 <div class="buttons">
//                     <button class="btn btn-secondary">change</button>
//                     <button class="btn btn-danger">delete</button>
//                 </div>
//                 </div>
//     `
//     output.innerHTML += html
//     })
// }


const validateText = id => {
    const input = document.querySelector('#'+id);
    const error = document.querySelector('#'+id+'-error');

    if(input.value === '') {
        error.innerText = 'You have to write a name!';
        return false;
    }

    else if (input.value.length < 3) {
        error.innerText = 'Your name must be at least 3 letters!';
        return false;
    }

    else {
        error.innerText = '';
        return true;
    }

}



const validateEmail = id => {
    const input = document.querySelector('#'+id);
    const error = document.querySelector('#'+id+'-error');

    let regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

        if(regEx.test(input.value)) {
            error.innerText = '';
            return true;
        }
        else {
            error.innerText = 'You have to use a valid email!'
            return false
        }
}


const validate = () => {

    document.querySelectorAll('input').forEach(input => {

        if(input.type === "text") {
            validateText(input.id);
        }
        if(input.type === "email") {
            validateEmail(input.id);
        }
    })
}

function listUsers() {
    output.innerHTML = ''
    users.forEach(user => {
      output.innerHTML += `
                 <div class="text">
                     <h3>${user.firstName} ${user.lastName}</h3>
                    <small>${user.email}</small>
                </div>
                <div class="buttons">
                    <button class="btn btn-secondary">change</button>
                   <button class="btn btn-danger">delete</button>
                 </div>
                </div>
                `
    })
}

const createUser = (firstName, lastName, email) => {
    let user = {
        id: Date.now().toString(),
        firstName,
        lastName,
        email
    }


    users.push(user);
    console.log(users);
}

// addUsers();



form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();

    if(validateText('firstName') && validateText('lastName') && validateEmail('email')) {
        createUser(firstName.value, lastName.value, email.value);

        listUsers();
    //    addUsers();
    }

    
    //selector all och for each gör att valideringer körs på varje input
    // document.querySelectorAll('input').forEach(input => {
    //     validate(input.id);
    // })

})


// console.log(input.id);

//om man skriver ('#'+id) så kan man använda detta sätt.
//annars validate('#firstName') eller ('firstname.id')
// validate('firstName')


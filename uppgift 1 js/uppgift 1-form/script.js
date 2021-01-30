const from = document.querySelector('#form'); // referens till vårt formulär
const output = document.querySelector('#output'); //referenser till vårat output som vi ska använda



const validate = id => {
    const input = document.querySelector('#'+id);
    const error = document.querySelector('#'+id+'-error');

    

    if(input.type === "text") {
   
        if(input.value === '') {
            error.innerText = 'You have to write a name!';
            return false;
        }
        else if (input.value.length <2) {
            error.innerText = 'Your name must be at least 2 letters!';
            return false;
        }
        else {
            error.innerText = '';
            return true;
        }
    }

    if(input.type === "email") {

    
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
    

}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    //selector all och for each gör att valideringer körs på varje input
    document.querySelectorAll('input').forEach(input => {
        validate(input.id);
        console.log(input.id);
    })

})

//om man skriver ('#'+id) så kan man använda detta sätt.
//annars validate('#firstName') eller ('firstname.id')
// validate('firstName')

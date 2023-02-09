const reserveForm = document.querySelector('.reserveForm');
const tableInput = document.querySelector('.table');
const timeInput = document.querySelector('.time');
const dniInput = document.querySelector('.dni');

tableInput.addEventListener('keydown', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg')

    tableInput.classList.remove('error');
    tableInput.classList.remove('correct');

    let regex = /^\d+$/;
    if(!regex.test(value)){
        tableInput.classList.remove('correct');
        tableInput.classList.add('error');
        error.innerHTML = 'Solo se aceptan números';
    } else {
            tableInput.classList.remove('error');
            tableInput.classList.add('correct');
            error.innerHTML = '';
    }
})

tableInput.addEventListener('change', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg')

    tableInput.classList.remove('error');
    tableInput.classList.remove('correct')

    if(value < 1 || value > 20){
        tableInput.classList.remove('correct');
        tableInput.classList.add('error');
        error.innerHTML = 'El número debe ser entre 1 y 20';
       } else {
        tableInput.classList.remove('error');
        tableInput.classList.add('correct');
        error.innerHTML = ''
       }
})

timeInput.addEventListener('keydown', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg')

    timeInput.classList.remove('error');
    timeInput.classList.remove('correct');

    let regex = /^(?:[01]|2(?![4-9]))\d:[0-5]\d/;
    if(!regex.test(value)){
        timeInput.classList.remove('correct');
        timeInput.classList.add('error');
        error.innerHTML = 'Debe introducir un formato válido'
    } else {
        timeInput.classList.remove('error');
        timeInput.classList.add('correct');
        error.innerHTML = ''
    }
})

timeInput.addEventListener('change', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    timeInput.classList.remove('error');
    timeInput.classList.remove('correct');
    if(value < "10:30" || value > "23:30"){
        timeInput.classList.remove('correct');
        timeInput.classList.add('error');
        error.innerHTML = 'Las reservas son entre las 10 de la mañana hasta las 23:30 de la noche'
    } else {
        timeInput.classList.remove('error');
        timeInput.classList.add('correct');
        error.innerHTML = ''
    } 
})

dniInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    dniInput.classList.remove('error');
    dniInput.classList.remove('correct');

    let regex = /^\d+$/;

    if(!regex.test(value)){
        dniInput.classList.remove('correct');
        dniInput.classList.add('error');
        error.innerHTML = 'Solo se aceptan números'
    } else {
        dniInput.classList.remove('error');
        dniInput.classList.add('correct');
        error.innerHTML = ''
    }
})

reserveForm.addEventListener('submit', e => {
    e.preventDefault();
    let target = e.target;
    let validInputs = 0;
    let inputs = target.querySelectorAll('input');
    inputs.forEach(input => {
        if(input.classList.contains('correct')){
            validInputs += 1;
        }
    })
    if(validInputs === inputs.length){
        target.submit();
    } else {
        alert('Revisar campos')
    }
})
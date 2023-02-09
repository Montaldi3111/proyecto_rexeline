const registerForm = document.forms[0]
const nameInput = document.querySelector('.name');
const surnameInput = document.querySelector('.surname');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const repeatPasswordInput = document.querySelector('.repeat-password');
const birthdayInput = document.querySelector('.birthday');

nameInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    nameInput.classList.remove('error');
    nameInput.classList.remove('success');

    let regex = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/;
    if(!regex.test(value)){
        nameInput.classList.remove('success');
        nameInput.classList.add('error');
        error.innerHTML = 'Solo se aceptan letras'
    } else {
        nameInput.classList.remove('error');
        nameInput.classList.add('success');
        error.innerHTML = ''
    }
})

surnameInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    surnameInput.classList.remove('error');
    surnameInput.classList.remove('success');

    let regex = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/;
    if(!regex.test(value)){
        surnameInput.classList.remove('success');
        surnameInput.classList.add('error');
        error.innerHTML = 'Solo se aceptan letras'
    } else {
        surnameInput.classList.remove('error');
        surnameInput.classList.add('success');
        error.innerHTML = ''
    }
})

emailInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    emailInput.classList.remove('error');
    emailInput.classList.remove('success');

    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!regex.test(value)){
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        error.innerHTML = 'Debes introducir un email válido'
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        error.innerHTML = ''
    }
})

passwordInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    passwordInput.classList.remove('error');
    passwordInput.classList.remove('success');

    let regex = /^(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
    if(!regex.test(value)){
        passwordInput.classList.remove('success');
        passwordInput.classList.add('error');
        error.innerHTML = 'La contraseña debe contener al menos 1 mayúscula, 1 minúscula, 1 carácter especial y 1 número'
    } else {
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        error.innerHTML = ''
    }
})

repeatPasswordInput.addEventListener('keyup', e => {
    let passwordValue = passwordInput.value;
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    repeatPasswordInput.classList.remove('error');
    repeatPasswordInput.classList.remove('success');

    let regex = /^(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
    if(!regex.test(value)){
        repeatPasswordInput.classList.remove('success');
        repeatPasswordInput.classList.add('error');
        error.innerHTML = 'La contraseña debe contener al menos 1 mayúscula, 1 minúscula, 1 carácter especial y 1 número'
    } else {
        if(passwordValue !== value){
            repeatPasswordInput.classList.remove('success');
            repeatPasswordInput.classList.add('error');
            error.innerHTML = 'Las contraseñas deben coincidir'
        } else {
            repeatPasswordInput.classList.remove('error');
            repeatPasswordInput.classList.add('success');
            error.innerHTML = ''
        }
    }
})

birthdayInput.addEventListener('change', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate()
    let todayDate = `${year}-${month <10 ? '0'+month : month}-${day < 10 ? '0'+day:day}`
    birthdayInput.classList.remove('error');
    birthdayInput.classList.remove('success');
    
    if(value >= todayDate){
        birthdayInput.classList.remove('success');
        birthdayInput.classList.add('error');
        error.innerHTML = 'El valor introducido es inválido'
    } else {
        birthdayInput.classList.remove('error');
        birthdayInput.classList.add('success');
        error.innerHTML = ''
    }
})

registerForm.addEventListener('submit', e => {
    e.preventDefault();
    let target = e.target;
    let inputs = registerForm.querySelectorAll('input');
    let validInputs = 0;
    inputs.forEach(input => {
        if(input.classList.contains('success')){
            validInputs += 1;
        }
    })
    if(validInputs === inputs.length){
        target.submit();
    } else {
        alert('Revisar Campos')
    }
})
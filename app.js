
let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')
let copys = document. querySelector('#copiado')
let charset = '1234567890qwertyuiopasdfghjklzxcvbnm!@#$%&'
let novaSenha = ''


sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value
}

function generatePassword() {
    
    let pass = ''
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
        
    }
    password.innerHTML = pass 
    novaSenha = pass 
    copys.innerHTML = 'Clique na senha para copiar.'
}


function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
    
   
}

function copy() {
    copys.innerHTML = 'Copiado!'
}
const passwordBox = document.getElementById('password')
const button = document.querySelector('.btn')
const copyBtn = document.querySelector('.copyIcon')
const length = 10   //length of password you want

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '!@#$%^&*()_=-[]{}/'

const allChar = upperCase + lowerCase + number + symbol

function genaeratePassword() {
    let password = ''
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(length> password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }
    passwordBox.value = password
}

function copyPassword() {
    passwordBox.select()
    document.execCommand('copy')
}

button.addEventListener('click', function(e){
    genaeratePassword();
    copyBtn.src = "images/copy.png"
})

copyBtn.addEventListener('click',function(e){
    copyPassword()
    copyBtn.src = "images/tick.png"
})
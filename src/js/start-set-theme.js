const checkboxInput = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
let startTheme = JSON.parse(localStorage.getItem('themeSwitchToggle'))
console.log(startTheme)

export default function startSetTheme(){
    if (startTheme = true) {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
        checkboxInput.checked = true
        localStorage.setItem('themeSwitchToggle', 'true')
    } else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        checkboxInput.checked = false
        localStorage.setItem('themeSwitchToggle', 'false')
    }
}


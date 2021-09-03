const checkboxInput = document.querySelector('#theme-switch-toggle')
let startTheme = JSON.parse(localStorage.getItem('themeSwitchToggle'))

export default function startSetTheme(){
    if (startTheme){
        checkboxInput.checked = true
    }

}


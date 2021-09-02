const checkboxInput = document.querySelector('#theme-switch-toggle')
const themeSwitch = document.querySelector('.theme-switch__control')
const body = document.querySelector('body')
themeSwitch.addEventListener('click', themeSwitchToggle)


export default function themeSwitchToggle() {
    if (checkboxInput.checked) {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
        localStorage.setItem('themeSwitchToggle', 'true')
    } else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        localStorage.setItem('themeSwitchToggle', 'false')

    }
}



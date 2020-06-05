const toggleSwitch = document.querySelector('input[type="checkbox"]')
const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    var element = document.body
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        element.classList.toggle("dark-mode")
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        element.classList.toggle("dark-mode")
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const toggleSwitch = document.querySelector('input[type="checkbox"]')
const currentTheme = localStorage.getItem('theme')
const element = document.body

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'night') {
    toggleSwitch.checked = true;
  }
  if (localStorage.theme === "night") {
    element.classList.toggle("night-mode")
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'night');
    localStorage.setItem('theme', 'night');
    element.classList.toggle("night-mode")
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    element.classList.toggle("night-mode")
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

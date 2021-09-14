let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
    startBtn = document.getElementById('start');
    menuDrop = document.querySelector('.about__menu');

jsTriggers.forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    let id = this.getAttribute('data-tab'),
      content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
      activeTrigger = document.querySelector('.js-tab-trigger.active'),
      activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active');
      trigger.classList.add('active');

      activeContent.classList.remove('active');
      activeContent.classList.remove('disable');
      content.classList.add('active');
    });
});


let theme = localStorage.getItem('data-theme');
let themeBtn  = document.querySelector('.header__themes__btn');

const changeThemeToDark = () => {
  document.documentElement.classList.remove('light');
  document.documentElement.classList.add('dark');
  themeBtn.value = 'dark';
  themeBtn.innerText = 'Светлая тема'; 
  localStorage.setItem("data-theme", "dark") 
}

const changeThemeToLight = () => {
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('light');
  themeBtn.value = 'light';
  themeBtn.innerText = 'Тёмная тема';
  localStorage.setItem("data-theme", 'light') 
}

localStorage.setItem("data-theme", theme);
  if (theme === 'dark') {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }

themeBtn.addEventListener('click', (e) => {
  if (themeBtn.value === 'dark') {
    changeThemeToLight();
  } else {
    changeThemeToDark();
    }
  }
)
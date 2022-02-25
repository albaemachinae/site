const jsTriggers = document.querySelectorAll('.js-tab-trigger');
const jsContents = document.querySelectorAll('.js-tab-content');
const startBtn = document.getElementById('start');
const menuDrop = document.querySelector('.about__menu');

jsTriggers.forEach((trigger) => {
  trigger.addEventListener('click', function() {
    const id = this.getAttribute('data-tab');
    const content = document.querySelector('.js-tab-content[data-tab="'+id+'"]');
    const activeTrigger = document.querySelector('.js-tab-trigger.active');
    const activeContent = document.querySelector('.js-tab-content.active');

    activeTrigger.classList.remove('active');
    trigger.classList.add('active');

    activeContent.classList.remove('active');
    activeContent.classList.remove('disable');
    content.classList.add('active');
  });
});

const theme = localStorage.getItem('data-theme');
const themeBtn = document.querySelector('.header__themes__btn');

const {lang} = document.documentElement;

const changeThemeToDark = () => {
  document.documentElement.classList.remove('light');
  document.documentElement.classList.add('dark');
  themeBtn.value = 'dark';
  if (lang === 'en') {
    themeBtn.innerText = 'Light';
  } else if (lang === 'ru') {
    themeBtn.innerText = 'Светлая';
  }
  localStorage.setItem("data-theme", "dark"); 
};

const changeThemeToLight = () => {
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('light');
  themeBtn.value = 'light';
  if (lang === 'en') {
    themeBtn.innerText = 'Dark';
  } else if (lang === 'ru') {
    themeBtn.innerText = 'Тёмная';
  }
  localStorage.setItem("data-theme", 'light'); 
};

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
);

// modal
const modal = document.getElementById("modal");

const img = document.getElementById("img");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
img.onclick = ()=>{
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

const span = document.getElementsByClassName("modal")[0];

span.onclick = ()=> { 
  modal.style.display = "none";
};


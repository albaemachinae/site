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

document.querySelector('.header__themes__btn').addEventListener('click', (e) => {
  document.documentElement.classList.remove('dark','light');
  document.documentElement.classList.add(e.target.value);
  if (e.target.value === 'dark') {
      e.target.value = 'light';
      e.target.innerText = 'Light Theme'
  } else {
      e.target.value = 'dark';
      e.target.innerText = 'Dark Theme'
    }
  }
)
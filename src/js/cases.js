const tabsSwitcher = (e, tabs, contents) => {
  const {id} = e.target.dataset;

  if (id) {
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");
    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  };
};
const caseslist = document.querySelector('.cases__tabs-list');
const casesListEl = document.querySelectorAll('.cases__tabs-list-el');
const cases = document.querySelectorAll('.cases__case');

caseslist.addEventListener('click',(e)=> tabsSwitcher(e,casesListEl,cases));
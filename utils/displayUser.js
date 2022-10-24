import get from './getElement.js';
import removeActive from './removeActive.js';

const title = get('.user-title');
const value = get('.user-value');
const img = get('.user-img');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (user) => {
  img.src = user.image;
  title.textContent = 'My name is';
  value.textContent = user.name;
  removeActive(btns)
  btns[0].classList.add('active');
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      title.textContent = `My ${label} is`
      value.textContent = user[label];
      removeActive(btns)
      btn.classList.add('active');
    })
  })
};

export default displayUser;
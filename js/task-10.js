function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const countDiv = Number(refs.input.value);
  const arrayDiv = [];

  let size = 30;

  for (let i = 0; i < countDiv; i += 1) {
    const div = document.createElement('div');
    size += 10;
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    arrayDiv.push(div);
  }

  refs.div.append(...arrayDiv);
}

function destroyBoxes() {
  refs.div.innerHTML = '';
}

const refs = {
  input: document.querySelector('input'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  div: document.querySelector('#boxes'),
};

refs.createButton.addEventListener('click', createBoxes);
refs.destroyButton.addEventListener('click', destroyBoxes);

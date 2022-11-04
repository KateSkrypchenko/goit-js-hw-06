const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', addClassElement);

function addClassElement(event) {
  if (event.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))) {
    toggleClassList('valid', 'invalid');
  } else {
    toggleClassList('invalid', 'valid');
  }
}

function toggleClassList(add, remove) {
  inputEl.classList.add(add);
  inputEl.classList.remove(remove);
}

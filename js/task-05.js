const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', changeTextSpan);

function changeTextSpan(event) {
  refs.span.textContent =
    event.currentTarget.value.length === 0 ? 'Anonymous' : event.currentTarget.value;
}

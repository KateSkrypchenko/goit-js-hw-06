const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;
  const valueInput = { email: email.value, password: password.value };

  if (email.value === '' || password.value === '') {
    alert('Увага! Всі поля форми повинні бути заповнені');
  } else {
    console.log(valueInput);
  }
  event.currentTarget.reset();
}

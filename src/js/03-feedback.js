import throttle from 'lodash.throttle';
const inputRef = document.querySelector('.feedback-form');

inputRef.addEventListener('input', throttle(onFormInput, 500));
inputRef.addEventListener('submit', onSubmitForm);

const tempKey = 'feedback-form-state';

userSavedDataOutput();

function onFormInput() {
  const userData = {
    email: inputRef.email.value,
    message: inputRef.message.value,
  };

  const userDataStringify = JSON.stringify(userData);
  localStorage.setItem(tempKey, userDataStringify);
}

function userSavedDataOutput() {
  const savedUserData = JSON.parse(localStorage.getItem(tempKey));
  if (savedUserData) {
    inputRef.email.value = savedUserData.email;
    inputRef.message.value = savedUserData.message;
  }
}

function onSubmitForm(evt) {
  if (!inputRef.email.value || !inputRef.message.value) {
    alert('Please, enter data in all fields');
    return;
  }
  evt.preventDefault();

  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(tempKey)));
  localStorage.removeItem(tempKey);
}

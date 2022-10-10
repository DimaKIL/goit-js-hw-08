import throttle from 'lodash.throttle';
const inputRef = document.querySelector('.feedback-form');

inputRef.addEventListener('input', throttle(onInput, 500));
inputRef.addEventListener('submit', onSubmit);

const tempKey = 'feedback-form-state';

savedData();

function onInput() {
  const userData = {

    email: inputRef.email.value,
    
    message: inputRef.message.value,

  };

  const userDataStringify = JSON.stringify(userData);
  localStorage.setItem(tempKey, userDataStringify);
}

function savedData() {

  const savedUserData = JSON.parse(localStorage.getItem(tempKey));

  if (savedUserData) {

    inputRef.email.value = savedUserData.email;
    inputRef.message.value = savedUserData.message;

  }

}


function onSubmit(evt) {
  if (!inputRef.email.value || !inputRef.message.value) {
    alert('Please, enter data in all fields');
    return;
  }



  evt.preventDefault();



  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(tempKey)));
  localStorage.removeItem(tempKey);
}

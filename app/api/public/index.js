const button = document.querySelector('#react');
const callback = () => button.insertAdjacentHTML('beforeend', '<p> Dont Touch Me</p>');

if (button) button.addEventListener('click', callback);

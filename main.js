const switchButton = document.querySelector('#switch');

switchButton.addEventListener('click', () =>
{
  document.body.classList.toggle('dark'); //toggle (if it doesnt have a class it will assign it one, and viceversa)
    switchButton.classList.toggle('active');
});
const navigation = document.querySelector('.menu-bars');
const body = document.querySelector('body');

navigation.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

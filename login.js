const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

function showSignUp() {
    document.getElementById('sign-in-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'block';
  }
  
  function showSignIn() {
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('sign-in-form').style.display = 'block';
  }
  
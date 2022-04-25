const navcpw = () => {
  const btnresponsive = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const Navlinks = document.querySelectorAll('.nav-links li')
  btnresponsive.addEventListener('click', () => {

    // lancer animation css

    btnresponsive.classList.toggle('active');
    nav.classList.toggle('nav-active');
  });
}

navcpw();
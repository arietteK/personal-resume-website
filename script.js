/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

/*To handle the menu toggle */
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('.navbar');
  menuIcon.addEventListener("click", function() {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
  })
});


/* scroll section active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };

  });
  /* sticky navbar */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* remove toggle icon and navbar when you scroll*/
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
}

/*scroll reveal */
ScrollReveal({
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .education-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });


document.getElementById('contact').addEventListener('submit', function (event) {
  const name = document.getElementById('name_input').value;
  const email = document.getElementById('email').value;
  const phone_num = document.getElementById("phone_number").value;
  const message = document.getElementById("text_area").value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    event.preventDefault();
  }
});

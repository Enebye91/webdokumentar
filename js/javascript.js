let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');



//const tl = gsap.timeLine({ defaults: { ease: "power1.out"} });



window.addEventListener("mousemove",cursor);

// her får du adgang til the event med e
// og jeg bruger page x og y for at give koordinater til hvor musen er

function cursor(e) {
mouseCursor.style.top = e.pageY + 'px';
mouseCursor.style.left = e.pageX + 'px';
};

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
      mouseCursor.classList.add('link-grow');
      link.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('link-grow');
      link.classList.remove('hovered-link');
  });

});


//tl.tofromTo("logo", {opacity: 0}, {opacity: 1, duration: 1 });

// footer
const adresse = document.getElementById('adresse')
adresse.innerText = 'Sønderhøj 30 ';

const zipcode = document.getElementById('zipcode')
zipcode.innerText = '8260 Viby J';

const mobil = document.getElementById('mobil')
mobil.innerText = 'Tlf. 72 28 60 00';
mobil.href = "Tel:+4572286000"
const copyright = document.getElementById('copyright')
copyright.innerText = '© Michelle V 2022. All rights reserved';

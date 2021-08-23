var elSitenav = document.querySelector('.site_header');
var elHamburger = elSitenav.querySelector('.burger-nav');

if(elHamburger){
  elHamburger.addEventListener('click', function() {
    elSitenav .classList.toggle('sitenav--open');
  });
}

// elHamburger.addEventListener('click', (evt) => {
//    elSitenav.classList.toggle('sitenav--open');
// });

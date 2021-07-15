'use strict';

const nav = document.querySelector('.nav');
const toggler = document.querySelector('.header__toggler');
const logo = document.querySelector('.header__logo');

const toggleNavOnClick = () => {
  toggler.classList.remove('header__toggler--close');
  nav.classList.add('nav--closed');
  logo.classList.add('header__logo--show');

  toggler.addEventListener('click', () => {
    if (nav.classList.contains('nav--closed')) {
      nav.classList.remove('nav--closed');
      toggler.classList.add('header__toggler--close');
      logo.classList.remove('header__logo--show');
    } else {
      nav.classList.add('nav--closed');
      toggler.classList.remove('header__toggler--close');
      logo.classList.add('header__logo--show');
    }
  })
}

toggleNavOnClick();

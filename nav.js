//Menu - desktop
const btnHandleSubmenuDec = document.getElementById('showSubmenuDec');
const btnHandleSubmenuOth = document.getElementById('showSubmenuOth');
const submenuDec = document.getElementById('submenu_dec');
const submenuOth = document.getElementById('submenu_oth');

btnHandleSubmenuDec.addEventListener('click', ()=> {
  submenuDec.classList.toggle('active');
  submenuOth.classList.remove('active');
})

btnHandleSubmenuOth.addEventListener('click', ()=> {
  submenuDec.classList.remove('active');
  submenuOth.classList.toggle('active');
})

window.onscroll = function() {
  submenuDec.classList.remove('active');
  submenuOth.classList.remove('active');
};


//Menu - mobile
  const btnBurger = document.querySelector('#nav_mobile .burger');
  const burgerElements = document.querySelectorAll('#nav_mobile .burger div');
  const menuMobile = document.querySelector('#nav_mobile .nav_mobile_bottom');

const btnShowDecorationSubmenu = document.getElementById('decorationSubmenu');
const decorationSubmenu = document.getElementById('submenuDecoration'); 

const btnShowOtherSubmenu = document.getElementById('otherSubmenu');

const otherSubmenu = document.getElementById('submenuOther'); 

const spanMore = [...document.querySelectorAll('#nav_mobile .more')];

const darkView = document.querySelector('#nav_mobile .dark');

  btnBurger.addEventListener('click', ()=>{
    burgerElements.forEach(element => {
      element.classList.toggle('active');
    })
    menuMobile.classList.toggle('active');
    document.body.classList.toggle('active');
    decorationSubmenu.classList.remove('active');
    otherSubmenu.classList.remove('active');

    darkView.classList.toggle('active');
    spanMore[0].classList.remove('active');
    spanMore[1].classList.remove('active');
  })

  btnShowDecorationSubmenu.addEventListener('click', ()=> {
    decorationSubmenu.classList.toggle('active');
    spanMore[0].classList.toggle('active');
    spanMore[1].classList.remove('active');

    otherSubmenu.classList.remove('active');
  })

  btnShowOtherSubmenu.addEventListener('click', ()=> {
    decorationSubmenu.classList.remove('active');
    otherSubmenu.classList.toggle('active');
    spanMore[0].classList.remove('active');
    spanMore[1].classList.toggle('active');
  })

const logo = document.querySelector('#nav_mobile .nav_mobile_top img.logo');

logo.addEventListener('click', ()=> {
  window.location.href = "https://godansiedlce.pl/"
})

let btnsHideNav = document.querySelectorAll('.hideNav');
btnsHideNav.forEach(element => {
  element.addEventListener('click', ()=> {
    burgerElements.forEach(element => {
      element.classList.toggle('active');
    })
    menuMobile.classList.toggle('active');
    document.body.classList.toggle('active');
    decorationSubmenu.classList.remove('active');
    otherSubmenu.classList.remove('active');

    darkView.classList.toggle('active');
    spanMore[0].classList.remove('active');
    spanMore[1].classList.remove('active');
  })
})
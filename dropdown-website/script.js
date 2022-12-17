// Desktop Feature SubMenu
const navFeature = document.querySelector('.features');
const subMenu = document.querySelector('.sub-menu--features');
const arrowUpFeature = document.getElementById('features_arrow-up');
const arrowDownFeature = document.getElementById('features_arrow-down');

arrowUpFeature.classList.add('hide');
subMenu.classList.add('hide');

navFeature.addEventListener('click', () => {
    
    subMenu.classList.toggle('hide');
    
   if(subMenu.classList.contains('hide')) {
    arrowUpFeature.classList.add('hide');
    arrowDownFeature.classList.remove('hide');
   } else {
    arrowUpFeature.classList.remove('hide');
    arrowDownFeature.classList.add('hide');
   }
})

// Desktop Company SubMenu 
const navCompany = document.querySelector('.company');
const subHead = document.querySelector('.sub-menu--company');
const arrowUpCompany = document.getElementById('company_arrow-up');
const arrowDownCompany = document.getElementById('company_arrow-down');

arrowUpCompany.classList.add('hide');
subHead.classList.add('hide');

navCompany.addEventListener('click', () => {
    
    subHead.classList.toggle('hide');
    
   if(subHead.classList.contains('hide')) {
    arrowUpCompany.classList.add('hide');
    arrowDownCompany.classList.remove('hide');
   } else {
    arrowUpCompany.classList.remove('hide');
    arrowDownCompany.classList.add('hide');
   }
})


//* NAV SUBMENU
// Mobile Feature SubMenu 
const navFeaturesMobile = document.querySelector('.feature-mobile');
const subHeadFeaturesMobile = document.querySelector('.subMenu-features--mobile');
const arrowUpFeaturesMobile = document.getElementById('features-upArrow--mobile');
const arrowDownFeaturesMobile = document.getElementById('features-downArrow--mobile');

arrowUpFeaturesMobile.classList.add('hide');
subHeadFeaturesMobile.classList.add('hide');


navFeaturesMobile.addEventListener('click', () => {
    subHeadFeaturesMobile.classList.toggle('hide');
    
   if(subHeadFeaturesMobile.classList.contains('hide')) {
    arrowUpFeaturesMobile.classList.add('hide');
    arrowDownFeaturesMobile.classList.remove('hide');
   } else {
    arrowUpFeaturesMobile.classList.remove('hide');
    arrowDownFeaturesMobile.classList.add('hide');
   }
})

// Mobile Company SubMenu 
const navCompanyMobile = document.querySelector('.company-mobile');
const subHeadCompanyMobile = document.querySelector('.subMenu-company--mobile');
const arrowUpCompanyMobile = document.getElementById('company-upArrow--mobile');
const arrowDownCompanyMobile = document.getElementById('company-downArrow--mobile');

arrowUpCompanyMobile.classList.add('hide');
subHeadCompanyMobile.classList.add('hide');

navCompanyMobile.addEventListener('click', () => {
    
    subHeadCompanyMobile.classList.toggle('hide');
    
   if(subHeadCompanyMobile.classList.contains('hide')) {
    arrowUpCompanyMobile.classList.add('hide');
    arrowDownCompanyMobile.classList.remove('hide');
   } else {
    arrowUpCompanyMobile.classList.remove('hide');
    arrowDownCompanyMobile.classList.add('hide');
   }
})

// *** MOBILE NAV 
// NAV MENU
const hamburgerOpen = document.querySelector('.hamburger-menu--open');
const navSlide = document.querySelector('.menu-mobile')
const navMobileMenu = document.querySelector('.mobile-nav')
const backgroundBlack = document.querySelector('.snapWebpage');

hamburgerOpen.addEventListener('click', () => {
navSlide.style.width = "300px";
document.querySelector('.menu-mobile').style.borderLeft = "solid 1px black";

})

const hamburgerClosed = document.querySelector('.hamburger-menu--close');

hamburgerClosed.addEventListener('click', () => {
    navSlide.style.width = "0";
    navMobileMenu.style.marginRight = "0";
    document.querySelector('.menu-mobile').style.borderLeft = "none"; 
    
    })



window.onload = function () {

  const menulinks = document.querySelectorAll('.menulink')
  const ourservices = document.getElementById('ourservices')
  const contact = document.getElementById('contact')
  const home = document.getElementById('home')
  const ourserviceslink = document.getElementById('ourserviceslink')
  const contactlink = document.getElementById('contactlink')
  const homelink = document.getElementById('homelink')
  const burgerLinks = document.getElementsByClassName('burger-menu-link')

  

  document.getElementById('burger-container').addEventListener('click', function () {
    this.classList.toggle('open');
    openCloseNav();
  });

  window.onresize = function(){
    getHeights();
    getHalfHeights();
    if (window.innerWidth > 1000) {  closeBurgerMenu() }
  };
  window.addEventListener('scroll', ()=>{
    changeActiveLinkColor();
  });
          
  getHeights();
  getHalfHeights();


  //This is for controlling the burger menu
  Array.from(burgerLinks).forEach(link => {
    link.addEventListener('click', function (e) {
      switch (e.target.id) {
        case 'bm-home':
          openCloseNav()
          animateBurger()
          scrollTo(link, true)
          break;
        case 'bm-ourservices':
          openCloseNav()
          animateBurger()
          scrollTo(link, true)
          break;
        case 'bm-contact':
          openCloseNav()
          animateBurger()
          
          scrollTo(link, true)
          break;
        default:
          break;
      }
    })
  });
  menulinks.forEach(link => {
    link.addEventListener('click', (link)=>{
      scrollTo(link.target, false);
    });
  });
  function scrollTo(link, isitaburgerlink){
    $('section, footer').css("scroll-snap-align", "none")
    if(isitaburgerlink === false){
      changeActive(link);
    }
    $('html').animate({
        scrollTop: $($.attr(link, 'href')).offset().top
    }, 500, () =>{
      $('section, footer').css("scroll-snap-align", "start")
    });
  };
  function changeActive(element){
    menulinks.forEach(link => {
        link.classList.remove('active-page')
    })
    element.classList.add('active-page')
  };
  function changeActiveLinkColor(){
    let scrollPos = $(window).scrollTop();
    if(scrollPos < halfwayToOurServices  ) changeActive(homelink)
    if(scrollPos >= halfwayToOurServices && scrollPos <  halfwayTocontact ) changeActive(ourserviceslink)
    if(scrollPos >= halfwayTocontact ) changeActive(contactlink)
  };


  function animateBurger() {
    document.getElementById('burger-container').classList.toggle('open');
  };
  function closeBurgerMenu(){
    document.getElementById("burger-menu").classList.remove('burger-menu-width');
    document.getElementById('burger-container').classList.remove('open');

  }
  function openCloseNav() {
        document.getElementById("burger-menu").classList.toggle('burger-menu-width');
      };
  function getHeights(){
    let homeHeight = home.offsetTop;
    let ourServicesHeight = ourservices.offsetTop;
    let contactHeight = contact.offsetTop;
  };
  function getHalfHeights(){
        halfwindowHeight = $(window).height() / 2
        halfwayToOurServices = $('#ourservices').offset().top - halfwindowHeight;
        halfwayTocontact = $('#contact').offset().top - halfwindowHeight;
      };
  

};
  


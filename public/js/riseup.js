
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
    let scrollPos = $(window).scrollTop();
    changeActiveLinkColor(scrollPos);
    toggleScrollSnapping(scrollPos)
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
  //this toggles scroll snap type when the footer is reached, because
  //it stops the links in the footer working properly
  //It is called in the scroll event listener (~line 25)
  function toggleScrollSnapping(scrollPos){
    sum = scrollPos -  contact.offsetTop  
    console.log(sum)
    if(sum > 100 ){
      document.documentElement.classList.remove('snap')
    }else if(sum <= 100 ){
      document.documentElement.classList.add('snap')
    }
  }

  function getPosition(element) {
    var clientRect = element.getBoundingClientRect();
    return {left: clientRect.left + document.body.scrollLeft,
            top: clientRect.top + document.body.scrollTop};
  }
  function changeActive(element){
    menulinks.forEach(link => {
        link.classList.remove('active-page')
    })
    element.classList.add('active-page')
  };

  //This changes the color of the main menu items, it is called in the 
  //scroll event listener, line 27
  function changeActiveLinkColor(scrollPos){
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
  


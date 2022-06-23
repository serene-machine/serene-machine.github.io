
window.onload = function () {

  const menulinks = document.querySelectorAll('.menulink')
  const homelink = document.getElementById('homelink')
  const ourserviceslink = document.getElementById('ourserviceslink')
  const contactuslink = document.getElementById('contactuslink')
  const home = document.getElementById('home')
  const ourServices = document.getElementById('ourServices')
  const contactUs = document.getElementById('contactUs')

  document.getElementById('burger-container').addEventListener('click', function () {
    this.classList.toggle('open');
    openCloseNav();
  });

  const burgerLinks = document.getElementsByClassName('burger-menu-link')
  Array.from(burgerLinks).forEach(link => {
    link.addEventListener('click', function (e) {
      switch (e.target.id) {
        case 'bm-home':
          openCloseNav()
          animateBurger()
          scrollTo(homelink)
          break;
        case 'bm-ourservices':
          openCloseNav()
          animateBurger()
          scrollTo(ourserviceslink)
          break;
        case 'bm-contactus':
          openCloseNav()
          animateBurger()
          scrollTo(contactuslink)
          break;
        default:
          break;
      }
    })
  })

  function scrollTo(link){
    $('section').css("scroll-snap-align", "none")
    changeActive(link);
    $('html').animate({
        scrollTop: $($.attr(link, 'href')).offset().top
    }, 500, () =>{
      $('section').css("scroll-snap-align", "start")
    });
  }
  function animateBurger() {
    document.getElementById('burger-container').classList.toggle('open');
  }
  function openCloseNav() {
    document.getElementById("burger-menu").classList.toggle('burger-menu-width');
  }
  function getHeights(){
    let homeHeight = home.offsetTop
    let ourServicesHeight = ourServices.offsetTop
    let contactusHeight = contactUs.offsetTop
  }
  function getHalfHeights(){
    halfwindowHeight = $(window).height() / 2
    halfwayToOurServices = $('#ourServices').offset().top - halfwindowHeight;
    halfwayToContactUs = $('#contactUs').offset().top - halfwindowHeight;
  }
  function changeActive(element){
    menulinks.forEach(link => {
        link.classList.remove('active-page')
    })
    element.classList.add('active-page')
  }
  function changeActiveLinkColor(){
    let scrollPos = $(window).scrollTop();
    if(scrollPos < halfwayToOurServices  ) changeActive(homelink)
    if(scrollPos >= halfwayToOurServices && scrollPos <  halfwayToContactUs ) changeActive(ourserviceslink)
    if(scrollPos >= halfwayToContactUs ) changeActive(contactuslink)
  }
  window.onresize = function(){
    getHeights();
    getHalfHeights()
  } 
  window.addEventListener('scroll', ()=>{
    changeActiveLinkColor()
  });
  getHeights();
  getHalfHeights()

};

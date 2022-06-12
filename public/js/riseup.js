

window.onload = function () {
  document.getElementById('burger-container').addEventListener('click', function () {
    this.classList.toggle('open');
    openCloseNav();
  });

  const menulinks = document.querySelectorAll('.menulink')
  const burgerlinks = document.querySelectorAll('.burger-menu-link')
  const homelink = document.getElementById('homelink')
  const ourserviceslink = document.getElementById('ourserviceslink')
  const contactuslink = document.getElementById('contactuslink')
  
  const home = document.getElementById('home')
  const ourServices = document.getElementById('ourServices')
  const contactUs = document.getElementById('contactUs')

  function scrollTo(link){
    $('section').css("scroll-snap-align", "none")
    changeActive(link);
    $('html').animate({
        scrollTop: $($.attr(link, 'href')).offset().top
    }, 500, () =>{
      $('section').css("scroll-snap-align", "start")
    });
  }
  
  homelink.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollTo(homelink)

  });
  
  ourserviceslink.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollTo(ourserviceslink)
  });
  
  contactuslink.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollTo(contactuslink)
  });
  
  let burgerLinks = document.getElementsByClassName('burger-menu-link')
  console.log(burgerLinks)
  Array.from(burgerLinks).forEach(link => {
    link.addEventListener('click', function (e) {
      switch (e.target.id) {
        case 'bm-home':
          openCloseNav()
          scrollTo(homelink)
          break;
        case 'bm-ourservices':
          openCloseNav()
          scrollTo(ourserviceslink)
          break;
        case 'bm-contactus':
          openCloseNav()
          scrollTo(contactuslink)
          break;
        default:
          break;
      }
    })
  })
  


 
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
    console.log('scrolling')
    changeActiveLinkColor()
  })
  getHeights();
  getHalfHeights()

};

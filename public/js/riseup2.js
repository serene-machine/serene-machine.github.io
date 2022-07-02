"use strict";

window.onload = function () {
    const menulinks = document.querySelectorAll('.menulink')
    
    const ourservices = document.getElementById('ourservices')
    const contact = document.getElementById('contact')
    const home = document.getElementById('home')
    const ourserviceslink = document.getElementById('ourserviceslink')
    const contactlink = document.getElementById('contactlink')
    const homelink = document.getElementById('homelink')
    const burgerLinks = document.getElementsByClassName('burger-menu-link')
    
    //adds opening and closing functionaility to burger container
    document.getElementById('burger-container').addEventListener('click', function () {
        this.classList.toggle('open');
        openCloseNav();
    });

    //Disables scroll-snap-align first, it interferes with  $('html').animate
    //Scrolls to contact form, when the 'hire a pilot button' is clicked
    document.getElementById('hirePilotBtn').addEventListener('click', function () {
        $('section, footer').css("scroll-snap-align", "none")
        $('html').animate({
            scrollTop: $('#contact').offset().top
        }, 500, () => {
            $('section, footer').css("scroll-snap-align", "start")
        });
    });
    window.addEventListener('scroll', () => {
        let scrollPos = $(window).scrollTop();
        changeActiveLinkColor(scrollPos, menulinks);
        toggleScrollSnapping(scrollPos);
    });

    //TRY MOVING ARRAY, FUNCTION BELOW DOESNT USE IT
    Array.from(burgerLinks).forEach(link => {
        link.addEventListener('click', function (e) {
            switch (e.target.id) {
                case 'bm-home':
                    openCloseNav();
                    animateBurger();
                    scrollTo(link, true, menulinks);
                    break;
                case 'bm-ourservices':
                    openCloseNav();
                    animateBurger();
                    scrollTo(link, true, menulinks)
                    break;
                case 'bm-contact':
                    openCloseNav();
                    animateBurger();

                    scrollTo(link, true, menulinks);
                    break;
                default:
                    break;
            }
        })
    });
    menulinks.forEach(link => {
        link.addEventListener('click', (link) => {
            scrollTo(link.target, false, menulinks);
        });
    });


    //Get the coordinates and of the sections
    getHeights();
    getHalfHeights();
    let scrollPos = $(window).scrollTop();
    changeActiveLinkColor(scrollPos, menulinks);



};  //End of window.onload

//LETS TRY MOVING THIS OUTSITE ONLOAD
    //When window is resized recalculate the coordinates of the sections
    //and the distances to the sections
window.onresize = function () {
    getHeights();
    getHalfHeights();
    if (window.innerWidth > 1000) { closeBurgerMenu() }
};
//This is called by clicking on the navbar links aor the links in the burger menu
//It checks if the link is from the burger menu, if it ISNT then it changes the active link
//Then scrolls to the position of the clicked link
//It also makes sure the scroll snap align is set to start
//which is removed if the user scrolls to the bottom of the page, because it messes with 
//the links in the bottom of the page
function scrollTo(link, isitaburgerlink, menulinks) {
    $('section, footer').css("scroll-snap-align", "none")
    if (isitaburgerlink === false) {
        changeActive(link, menulinks);
    }
    $('html').animate({
        scrollTop: $($.attr(link, 'href')).offset().top
    }, 500, () => {
        $('section, footer').css("scroll-snap-align", "start")
    });
};

//this toggles scroll snap type when the footer is reached, because
//it stops the links in the footer working properly
//It is called in the scroll event listener (~line 25)
function toggleScrollSnapping(scrollPos) {
    let sum = scrollPos - contact.offsetTop
    console.log('scrollPos' + scrollPos)
    console.log('contact.offset' + contact.offsetTop)
    console.log('sum' + sum)
    if (sum >= 0) {
        document.documentElement.classList.remove('snap')
    } else if (sum <= contact.offsetTop) {
        document.documentElement.classList.add('snap');
    };
};

//This is used to add or remove the active-page class to the 
//navbar links
function changeActive(element, menulinks) {
    menulinks.forEach(link => {
        link.classList.remove('active-page');
    });
    element.classList.add('active-page');
};

//This checks scroll position and the calls change avtive to
//change the color of the navbar links, it is called in the 
//scroll event listener
function changeActiveLinkColor(scrollPos, menulinks) {
    let halfwayToOurServices = getHalfScreenHeightAboveOurServices()
    let halfwayTocontact = getHalfScreenHeightAboveOurContact()
    if (scrollPos < halfwayToOurServices) changeActive(homelink, menulinks)
    if (scrollPos >= halfwayToOurServices && scrollPos < halfwayTocontact) changeActive(ourserviceslink, menulinks)
    if (scrollPos >= halfwayTocontact) changeActive(contactlink, menulinks)
};

//Adds the open class to the burger container in the header, which creates
//the cross effect
function animateBurger() {
    document.getElementById('burger-container').classList.toggle('open');
};

//Closes the burger menu (the dark menu that slides in from the left)
function closeBurgerMenu() {
    document.getElementById("burger-menu").classList.remove('burger-menu-width');
    document.getElementById('burger-container').classList.remove('open');
};


//Opens and closes the burger menu
//used line 6
function openCloseNav() {
    document.getElementById("burger-menu").classList.toggle('burger-menu-width');
};

//Gets the coordinates of the sections
function getHeights() {
    let homeHeight = home.offsetTop;
    let ourServicesHeight = ourservices.offsetTop;
    let contactHeight = contact.offsetTop;
};
//Gets the coordinates of the sections, then finds half the viewport height, 
//and calculates half the viewport height above the start of the section
//This can then be used to change the color of the active link in the 
//nav bar as the viewport  
function getHalfHeights() {
    let halfwindowHeight = $(window).height() / 2
    let halfwayToOurServices = $('#ourservices').offset().top - halfwindowHeight;
    let halfwayTocontact = $('#contact').offset().top - halfwindowHeight;
};
function getHalfScreenHeightAboveOurServices() {
    let halfwindowHeight = $(window).height() / 2
    let halfwayToOurServices = $('#ourservices').offset().top - halfwindowHeight;
    return halfwayToOurServices
};
function getHalfScreenHeightAboveOurContact() {
    let halfwindowHeight = $(window).height() / 2
    let halfwayTocontact = $('#contact').offset().top - halfwindowHeight;
    return halfwayTocontact
};


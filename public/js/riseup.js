window.onload = function () {
    document.getElementById('burger-container').addEventListener('click', function () {
     this.classList.toggle('open');
     openNav();
    })
   }
  function openNav() {
    document.getElementById("burger-menu").classList.toggle('burger-menu-width');
  }
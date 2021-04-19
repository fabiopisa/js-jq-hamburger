// creaiamo la situazione di partenza per scrivere il nostro codice
$(document).ready(function(){
  // faccio le referenze
  var listBurger = $(".hamburger-menu");
  var menuBurger = $(".header-right > a");
  var closeMenu = $(".close");
  // do il comando al click
  menuBurger.click(function(){
   listBurger.show();
  });
  // do il comando di chiusura con il click sulla x del menu
  closeMenu.click(function(){
   listBurger.hide();
  });

});
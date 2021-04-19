// creaiamo la situazione di partenza per scrivere il nostro codice
$(document).ready(function(){
// faccio le referenze
  var listBurger = $("hamburger-menu");
  var menuBurger = $("header-right > a");
// do il comando al click
  menuBurger.click(function(){
   listBurger.show();
  });

});
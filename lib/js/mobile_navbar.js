$(document).ready(function() {
  $(document).on("touchstart", function(){
    tapDetected = true;
  });

  $(document).on("touchmove", function(){
    //Turn tap detect off when user is scrolling
    tapDetected = false;
  });

  var navbarItems = ["navbar-toggle","dropdown-toggle", "nav-link"];
  /*nav-link class is used to allow navbar to remain open as user clicks
  on contact options. Without it, navbar will close but user will not go to the desired page/app. The default behavior of bootstrap for dropdown menu is to collapse the dropdown after user clicks on it. This script interfers with the auto collapse feature as it will fire before bootstrap's code.*/

  $(document).on("click touchend", function(event) {
    if (event.type === "touchend" && tapDetected){
        var clickover = $(event.target);
        var navbarOpened = $(".navbar-collapse").is(":visible");
        if (navbarOpened){
          if(clickover.hasClass(navbarItems[0]) === false
            && clickover.hasClass(navbarItems[1]) === false
            && clickover.hasClass(navbarItems[2]) === false){
            $("button.navbar-toggle").click();
          }
        }
      }
  });

});

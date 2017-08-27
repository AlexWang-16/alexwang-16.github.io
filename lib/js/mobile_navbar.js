$(document).ready(function() {
  $(document).on("touchstart", function(){
    tapDetected = true;
  });

  $(document).on("touchmove", function(){
    //Turn tap detect off when user is scrolling
    tapDetected = false;
  });

  $navbarItems = ["navbar-toggle","dropdown-toggle","nav-link"];

  $(document).on("click touchend", function(event) {
    if (event.type === "touchend" && tapDetected){
        var clickover = $(event.target);
        var navbarOpened = $(".navbar-collapse").is(":visible");
        if (navbarOpened){
          if(clickover.hasClass($navbarItems[0]) === false
            && clickover.hasClass($navbarItems[1]) === false
            && clickover.hasClass($navbarItems[2]) === false){
            $("button.navbar-toggle").click();
          }
        }
      }
  });

});

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
  on contact options. Without it, navbar will close but user will not go to the desired page/app. This may be due to bootstrap's JavaScript in controlling the way dropdown links behave*/

  $(document).on("click touchend", function(event) {
    if (event.type === "touchend" && tapDetected){
        var clickover = $(event.target);
        var navbarOpened = $(".navbar-collapse").is(":visible");
        if (navbarOpened){
          if(clickover.hasClass(navbarItems[0]) === false
            && clickover.hasClass(navbarItems[1]) === false
            && clickover.hasClass(navbarItems[2]) === false){
            console.log("Menu toggled");
            $("button.navbar-toggle").click();
          }
        }
      }
  });

});

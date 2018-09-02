const EVENT = Object.freeze({
  touchStart: 'touchStart',
  touchEnd: 'touchend',
  click: 'click'
});

$(document).ready(function() {
  var t = ["navbar-toggle", "dropdown-toggle", "nav-link"];
  $(document).on("click touchend", function(e) {
          var n = $(e.target),
              o = $(".navbar-collapse").is(":visible");
          o && n.hasClass(t[0]) === !1 && n.hasClass(t[1]) === !1 && n.hasClass(t[2]) === !1 && $("button.navbar-toggle").click();
  })
});
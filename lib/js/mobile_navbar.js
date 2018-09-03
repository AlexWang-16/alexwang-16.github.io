var EVENTS = Object.freeze({
  clickTouchEnd: "click touchend",
  touchEnd: "touchend",
  touchStart: "touchstart",
  touchMove: "touchmove",
  click: "click"
})
var tapDetected = !1;
$(document).ready(function() {
$(document).on(EVENTS.touchStart, function() {
  tapDetected = !0
}), $(document).on(EVENTS.touchMove, function() {
  tapDetected = !1
});
var t = ["navbar-toggle", "dropdown-toggle", "nav-link"];
$("main").on(EVENTS.clickTouchEnd, function(c) {
  if ($(window).width() < 753) {
    var o = $(".navbar-collapse").is(":visible");
    var e = $(c.target);
    if (c.type === EVENTS.touchEnd && tapDetected || c.type === EVENTS.click){
      if(o && e.hasClass(t[0]) === !1 && e.hasClass(t[1]) === !1 && e.hasClass(t[2]) === !1) {
          $("button.navbar-toggle").click();
          c.stopPropagation();
      }
    }
  }
})
});
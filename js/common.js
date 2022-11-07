$(document).ready(function () {
  $(function () {
    $(".ef").css({ opacity: "0" });
    $(window).scroll(function () {
      $(".ef").each(function () {
        var ePos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > ePos - windowHeight + windowHeight / 3.5) {
          $(this).animate({ opacity: 1 }, { duration: 600, easing: "swing" });
        }
      });
    });
  });
});

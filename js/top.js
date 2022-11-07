$(document).ready(function () {
  jQuery(function () {
    var appear = false;
    var pagetop = $("#page_top");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 760) {
        //780pxスクロールしたら
        if (appear == false) {
          appear = true;
          pagetop.stop().animate(
            {
              bottom: "50px", //下から50pxの位置に
            },
            1000
          ); //0.3秒かけて現れる
        }
        if ($(this).scrollTop() > 4500) {
          appear = true;
          pagetop.stop().animate(
            {
              bottom: "500px", //下から50pxの位置に
            },
            1000
          );
        } else if ($(this).scrollTop() > 4450) {
          appear = true;
          pagetop.stop().animate(
            {
              bottom: "50px", //下から50pxの位置に
            },
            1000
          );
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate(
            {
              bottom: "-500px", //下から-5000pxの位置に
            },
            1000
          ); //0.3秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $("body, html").animate({ scrollTop: 0 }, 1000); //1秒かけてトップへ戻る
      return false;
    });
  });
});

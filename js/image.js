$(document).ready(function () {
  //右からのフェードイン
  $(function () {
    const fade_bottom = 500; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 200; // どのぐらい要素を動かすか(px)
    const fade_time = 1000; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".im_r").css({
      opacity: 0,
      transform: "translateX(" + fade_move + "px)",
      transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".im_r").each(function () {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateX(0)",
          });
        }
      });
    });
  });
  //左からのフェードイン
  $(function () {
    const fade_bottom = 500; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 200; // どのぐらい要素を動かすか(px)
    const fade_time = 1000; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".im_l").css({
      opacity: 0,
      transform: "translateX(-" + fade_move + "px)",
      transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".im_l").each(function () {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateX(0)",
          });
        }
      });
    });
  });
});

// 横スライド
$(function () {
  //コンテンツの横サイズ
  var cont = $("#contents");
  var contW = $(".section").outerWidth(true) * $("div", cont).length;
  cont.css("width", contW);
  //スクロールスピード
  var speed = 50;
  //マウスホイールで横移動
  $("html").mousewheel(function (event, mov) {
    //ie firefox
    $(this).scrollLeft($(this).scrollLeft() - mov * speed);
    //webkit
    $("body").scrollLeft($("body").scrollLeft() - mov * speed);
    return false; //縦スクロール不可
  });
});

// ナビゲーションスクロール
$("#nav a").click(function (event) {
  var $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollLeft: $($anchor.attr("href")).offset().left,
      },
      500
    );
  event.preventDefault();
});

// ロゴ遷移
//logoの表示
$(window).on("load", function () {
  $("#splash").delay(1500).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut("slow"); //ロゴを1.2秒（1200ms）待機してからフェードアウト
});

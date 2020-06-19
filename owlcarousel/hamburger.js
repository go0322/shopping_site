$(document).ready(function() {
  $("#sp_navi_btn").click(function() {
    $(this).next().slideToggle();
  });
});


$(document).ready(function() {
  $("#page_link h4").click(function() { //id=""を押したら実行
    $(this).toggleClass("openlink"); // openlinkというclassを付与する
    $("#page_link h4 + ul").slideToggle(); // id=""の後にある直後のulを表示させる
  });
});
  
$(document).ready(function() {
  $("#categories_link h4").click(function() { //id=""を押したら実行
    $(this).toggleClass("openlink"); // openlinkというclassを付与する
    $("#categories_link h4 + ul").slideToggle(); // id=""の後にある直後のulを表示させる
  });
});  
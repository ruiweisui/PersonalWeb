$(document).ready(function(){
  $('.navibaritem').on('mouseover',
  function() {
    $(this).css({
      "background": "rgba(195, 195, 195,0.25)",
      "border-radius": "7px"
    });
  })
  $('.navibaritem').on('mousedown',
    function() {
      $(this).css({
        "border-style": "solid",
        "border-radius": "6px"
    });
  })
  $('.navibaritem').on('mouseleave',
  function() {
    $(this).css("background", "none");
  });
});

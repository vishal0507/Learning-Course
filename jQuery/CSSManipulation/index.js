$(document).ready(function()
{
  $(".button2").click(function()
  {
    $("#para2").css("color","red");
    $(".button2").css({
        background:"black",
        color:"red"
    });

  });
  $(".button3").click(function()
  {
    $("#para3").css({
        color:"orange",
        fontSize:"30px"
    });
    $(".button3").css({
        background:"green",
        color:"white",
        border:"solid 5px black",
    });
  });
});
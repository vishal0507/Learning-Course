$(document).ready(function()
{
    $("#button1").click(function()
    {
        $(".container1").prepend('<h2>'+$("#title").val()+'</h2> ')
        $("#para1").append(" "+$("#content").val());
    });
    $("#button2").click(function()
    {
        $(".container2").prepend('<h2>'+$("#title").val()+'</h2> ')
        $(".titleValue").append(titleVal2);
        $("#para2").append(" "+$("#content").val());
    });
    $("#button3").click(function()
    {
        $(".container3").prepend('<h2>'+$("#title").val()+'</h2> ')
        $(".titleValue").append(titleVal3);
        $("#para3").append(" "+$("#content").val());
    });
});
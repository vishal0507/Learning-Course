$(document).ready(function()
{
    $("#button1").click(function()
    {
        $(".container2").fadeOut(3000,function(){
            $(".container3").css("background-color","yellow");
        });
        
    });
    $("#button2").click(function()
    {
        $("p").toggle("normal");
    });
    $("#button3").click(function()
    {
        $("p").toggle("normal");
    });
});
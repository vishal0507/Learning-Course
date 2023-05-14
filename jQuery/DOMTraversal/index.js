$(document).ready(function()
{
    $("#count").click(function()
    {
        $("#count").before("<h3>"+"Total Title- "+$("h3").length+"</h3>")
        $("#count").before("<h3>"+"Total Tags- "+$("span").length+"</h3>")
        $("#count").before("<h3>"+"Total Date Info- "+$("p").length+"</h3>")
    });
    $("#colorChange").click(function()
    {
        $("span").css("color","yellow");
    });
});
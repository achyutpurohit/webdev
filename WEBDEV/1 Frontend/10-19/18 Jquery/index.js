$(document).ready(function () {
    $("h1").css("color","red");
    $("h1").text("NOOOOo")
});
$(document).ready(function () {
    $("button").html("<em>button</em>");
});
$("button").click(function (e) { 
    e.preventDefault();
    $("h1").css("color","purple");
    $("h1").fadeOut();
    setTimeout(function()  {
        $("h1").fadeIn();
    }, 1000);
});

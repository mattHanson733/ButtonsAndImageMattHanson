$(".hidden-text").hide();


$(".inside").click(function() {
	$("p").css("font-size", "28px");
    $(".message-1").css("border", "purple dashed 3px");
    $(".message-2").css("color", "RoyalBlue");
    $(".message-2").text("God job clicking the button!");
});

$(".outside").click(function() {
	$(".three-tags").fadeToggle();
});

$("img").mouseenter(function() {
	$(".hidden-text").fadeIn();
});

$("img").mouseleave(function() {
	$(".hidden-text").fadeOut();
});
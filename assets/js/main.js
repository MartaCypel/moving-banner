$(".menu ul li ul").hide();


$(".menu ul li").bind('mousemove', function(){
    $(this).children("ul").slideDown(500);
});

$(".menu ul li").bind('mouseleave', function(){
    $(this).children("ul").slideUp(400);
});


$(".icon-align-justify").on('click', function(){
    $('body').toggleClass('body2');
});
function scrollTo(id) {
    if ($(id).length) {
        var getOffset = $(id).offset().top;
        var targetDistance = 0;
        $('html,body').animate({
            scrollTop: getOffset - targetDistance
        }, 500);
    }
}

$('.scrollTo').click(function () {
    var getElem = $(this).attr('href');
    var targetDistance = 0;
    if ($(getElem).length) {
        var getOffset = $(getElem).offset().top;
        $('html,body').animate({
            scrollTop: getOffset - targetDistance
        }, 500);
    }
    return false;
});
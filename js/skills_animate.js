
$(document).ready(function () {
    $('.skillbar-bar').scrollfire({

        // Offsets
        offset: 0,
        topOffset: 150,
        bottomOffset: 150,

        // Fires once when element begins to come in from the top
        onTopIn: function (elm, distance_scrolled) {
            console.log($(elm));
            $(elm).animate({
                width:jQuery(elm).attr('data-percent')
            },6000);
        }
    });
});

$(document).ready(function () {
    $('#sub_button').click(function () {
        $.ajax({
            url: 'php/Subscribe.php',
            method: 'POST',
            data: {
                email: $('#email').val()
            },
            success: function (d) {
                console.log(d);

            }
        })
    });
});
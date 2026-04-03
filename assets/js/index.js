$(document).ready(function() {
    $('.tab.type-tab li').on('click', function(e) {
        e.preventDefault();

        $('.tab.type-tab li').removeClass('type-on');
        $(this).addClass('type-on');

        var index = $(this).index();

        if (index === 0) {
            $('.type-classic').show();
            $('.type-premium').hide();
        } else {
            $('.type-classic').hide();
            $('.type-premium').show();
        }

        return false;
    });

    $('.type-premium').hide();
});

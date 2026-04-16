$(function(){
    // tab switching
    $('.tab-button').on('click', function(){
        var target = $(this).data('tab');
        $('.tab-button').removeClass('is-active');
        $(this).addClass('is-active');
        $('.tab-panel').removeClass('is-active');
        $('#' + target).addClass('is-active');
    });

    // pagination
    $('.workshop__pagination .pagination__page').on('click', function(){
        $('.workshop__pagination .pagination__page').removeClass('is-active');
        $(this).addClass('is-active');
    });
});

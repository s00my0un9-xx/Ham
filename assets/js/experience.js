$(function(){
    // pagination
    $('.workshop__pagination .pagination__page').on('click', function(){
        $('.workshop__pagination .pagination__page').removeClass('is-active');
        $(this).addClass('is-active');
    });
});

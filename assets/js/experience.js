$(function(){
    // PC 탭 (2개 버튼: 패널 2개씩 활성)
    $('.tab-buttons--pc .tab-button').on('click', function(){
        var scrollY = window.scrollY;
        var targets = $(this).data('tabs').split(',');
        $('.tab-buttons--pc .tab-button').removeClass('is-active');
        $(this).addClass('is-active');
        $('.tab-panel').removeClass('is-active');
        $.each(targets, function(i, id){
            $('#' + id.trim()).addClass('is-active');
        });
        window.scrollTo(0, scrollY);
    });

    // MO 탭 (4개 버튼: 패널 1개씩 활성)
    $('.tab-buttons--mo .tab-button').on('click', function(){
        var target = $(this).data('tab');
        $('.tab-buttons--mo .tab-button').removeClass('is-active');
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

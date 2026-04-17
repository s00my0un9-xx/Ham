$(function(){

    var MO_BREAKPOINT = 600;

    function isMobile() {
        return $(window).width() <= MO_BREAKPOINT;
    }

    // PC 탭 적용 (2개 패널 동시 표시)
    function applyPcTab($btn) {
        var scrollY = window.scrollY;
        var targets = ($btn.data('tabs') || '').split(',');
        $('.tab-buttons--pc .tab-button').removeClass('is-active');
        $btn.addClass('is-active');
        $('.tab-panel').removeClass('is-active');
        $.each(targets, function(i, id){
            $('#' + id.trim()).addClass('is-active');
        });
        window.scrollTo(0, scrollY);
    }

    // MO 탭 적용 (1개 패널만 표시)
    function applyMoTab($btn) {
        var scrollY = window.scrollY;
        var target = $btn.data('tab');
        $('.tab-buttons--mo .tab-button').removeClass('is-active');
        $btn.addClass('is-active');
        $('.tab-panel').removeClass('is-active');
        $('#' + target).addClass('is-active');
        window.scrollTo(0, scrollY);
    }

    // PC 탭 클릭
    $('.tab-buttons--pc .tab-button').on('click', function(){
        var firstTab = $(this).data('tabs').split(',')[0].trim();
        history.pushState({ tab: firstTab, mode: 'pc' }, '', '#' + firstTab);
        applyPcTab($(this));
    });

    // MO 탭 클릭
    $('.tab-buttons--mo .tab-button').on('click', function(){
        var target = $(this).data('tab');
        history.pushState({ tab: target, mode: 'mo' }, '', '#' + target);
        applyMoTab($(this));
    });

    // 뒤로가기/앞으로가기
    $(window).on('popstate', function(e){
        syncTabsToBreakpoint();
    });

    // 모바일/PC 전환 시 탭 상태 재조정
    function syncTabsToBreakpoint() {
        if (isMobile()) {
            var $activeMoBtn = $('.tab-buttons--mo .tab-button.is-active');
            if (!$activeMoBtn.length) $activeMoBtn = $('.tab-buttons--mo .tab-button').first();
            applyMoTab($activeMoBtn);
        } else {
            var $activePcBtn = $('.tab-buttons--pc .tab-button.is-active');
            if (!$activePcBtn.length) $activePcBtn = $('.tab-buttons--pc .tab-button').first();
            applyPcTab($activePcBtn);
        }
    }

    // 초기 로드
    syncTabsToBreakpoint();

    // 리사이즈 시 탭 상태 재조정
    var resizeTimer;
    $(window).on('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(syncTabsToBreakpoint, 150);
    });
});

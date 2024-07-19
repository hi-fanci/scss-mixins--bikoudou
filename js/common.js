;
(function () {
    const html = $('html');
    const CLASS = {
        _is_run: 'is_run',
        _is_active: 'is_active'
    }

    const AnimateInit = () => {
        const js_ani = $('.js_ani');
        const handleFadeUpState = () => {
            const {
                scrollY: y,
                innerHeight: wh
            } = window;
            js_ani.map((a, b) => {
                const _ = $(b);
                const {
                    top
                } = _.offset();
                const height = _.innerHeight();
                const bottom = y + wh;
                if (top < bottom) {
                    if (top + height > y) {
                        _.addClass(CLASS._is_run);
                    } else {
                        _.removeClass('js_ani');
                    }
                } else {

                }
            });
        };

        handleFadeUpState();
        $(window).on('scroll', function () {
            handleFadeUpState();
        });
    };

    // page loading
    const PageLoadInit = () => {
        const handleLoadingState = () => {
            AnimateInit();
        }
        $(window).on('load', function () {
            handleLoadingState();
        })
    };
    PageLoadInit();
})();
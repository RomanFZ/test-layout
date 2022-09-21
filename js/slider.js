$(function () {
    const _thumb = $('.slick-thumb');
    const _thumb_content = _thumb.html();
    const slider_thumb_settings = {
        infinite: false,
        arrows: true,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    };
    _thumb.slick(slider_thumb_settings);
    $('.gallery-filter-buttons button').on('click', function (e) {
        const filter_target = $(this).val();
        const hoverButtons = document.querySelectorAll('.hover-button')
        hoverButtons.forEach(item => {
            console.log(item)
            item.classList.remove('hover-button')
        })
        this.classList.add('hover-button')
        if($('.filter-target').hasClass('slick-initialized')){
            if (filter_target == "reset") {
                _thumb.slick('unslick').empty().append(_thumb_content).slick(slider_thumb_settings);
            }else{
                var _thumb_new = $(_thumb_content).filter('[data-filter="' + filter_target + '"]');
                _thumb.slick('unslick').empty().append(_thumb_new).slick(slider_thumb_settings);
            }
        }
    });
});
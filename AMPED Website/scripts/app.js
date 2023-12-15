$(document).ready(function(){
    $('#video').bgVideo({
        showPausePlay: false,
        pauseAfter: 0,
        fadeIn: 0
    });

    $('.main-carousel').flickity({
        contain: true,
        cellAlign: 'left',
        pageDots: false
    });

    $('.statement').parallax({
        imageSrc: '../assets/AdobeStock_676448348.jpeg'
    });

    $(window).trigger('resize').trigger('scroll');

    $(function () {
        $('.tlt').textillate();
    })

    jQuery(function($){
        $(".text-sm-start .banner").textillate({
            loop:true,
            minDisplaytime: 3000,
            initialDelay:500,
 
        })
    });

});
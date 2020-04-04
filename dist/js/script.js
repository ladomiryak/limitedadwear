$(document).ready(function(){

    //close out text
    $('.out__close').on('click', function () {
        $('.out').hide('slow');
    });

    //search
    $(".search__icon").on('click', function(){
        $(".search, .search__input").toggleClass("active");
        $(".search__input[type='text']").focus();
    });

    //menu
    
    $('.hamburger').on('click', function () {
        $(this).toggleClass("hamburger_active");
        $(".menu__nav").toggleClass("menu__nav_active");
        
        $(document).click( function(e){
            if ( $(e.target).closest('.menu').length ) {
                return;
            }
            $('.menu__nav').removeClass("menu__nav_active");
            $('.hamburger').removeClass("hamburger_active");
        });
    });

    //sublist
    $(".menu__toplist").on('click', function () {
        $(this).siblings().find(".menu__sublist").hide();
        $(this).children('.menu__sublist').slideToggle("slow");
    });

    //slider
    $('.slider__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__nav'
    });
    
    $('.slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider__items',
        dots: false,
        focusOnSelect: true
    });
    
    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        let slideno = $(this).data('slide');
        $('.slider__nav').slick('slickGoTo', slideno - 1);
    });

    //number plugin
    $(document).ready(function () {
        $('.numb').number_plugin();
    });

    //slider recomendation
    $('.recomendation__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
});
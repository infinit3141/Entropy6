$(document).ready(() => {

    //hover over the works
    $('.segment').on('mouseenter', event => {
        $(event.currentTarget).children(".text").fadeIn('fast');
    })
    $('.segment').on('mouseleave', event => {
        $(event.currentTarget).children(".text").fadeOut('fast');
    })

    //to open up the work that is clicked
    // $(".segment").on('click', event => {
    //     window.location = $(event.currentTarget).find("a").attr("href");
    // })
    
})
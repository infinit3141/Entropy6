!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;s=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!a)return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),e.addEventListener("touchend",function(t){if(s!==t.target)return;var e=parseInt(l(s,"data-swipe-threshold","20"),10),o=parseInt(l(s,"data-swipe-timeout","500"),10),c=Date.now()-r,d="",p=t.changedTouches||t.touches||[];Math.abs(u)>Math.abs(i)?Math.abs(u)>e&&c<o&&(d=u>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&c<o&&(d=i>0?"swiped-up":"swiped-down");if(""!==d){var b={dir:d.replace(/swiped-/,""),touchType:(p[0]||{}).touchType||"direct",xStart:parseInt(n,10),xEnd:parseInt((p[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((p[0]||{}).clientY||-1,10)};s.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),s.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);var n=null,a=null,u=null,i=null,r=null,s=null;function l(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);


$(document).ready(() => {
    

    //make cursor pointer to note that you can open the menu
    $('.open-simulations').css('cursor', 'pointer');
    $('.open-transcriptions').css('cursor', 'pointer');

    //mobile-device menu control
    const x = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)");
    const y = window.matchMedia("(-webkit-min-device-pixel-ratio: 2)");
    const z = window.matchMedia("(max-device-width: 820px)");
    const e = window.matchMedia("(max-device-width: 414px)");
    const a = window.matchMedia("(orientation: landscape)");
    // const portrait = window.matchMedia("(orientation: portrait)");
    const f = window.matchMedia("(max-device-height: 414px)");
    //ipad menu control--------------------------------in development
    const b = window.matchMedia("(max-device-width: 1366px)");
    const c = window.matchMedia("(min-device-width: 768px)");
    const d = window.matchMedia("(min-device-height: 768px)");

    const intro = document.getElementById('intro');

    

    if ((x.matches || y.matches) && e.matches) {
        //mobile portrait

        $('#workmenu').hide();

        //hide menu when scrolling down and show it when moving up
        let oldValue = 0;
        let newValue = 0;
        window.addEventListener('scroll', (e) => {
        newValue = window.pageYOffset;
        if ((oldValue + 50) < newValue) {
            $('.topMenu').slideUp('slow');
        } else if ((oldValue - 50) > newValue) {
            $('.topMenu').slideDown('slow');
        }
        oldValue = newValue;
        });
        
        //making little slideshow at pages with 3 imgs in a row
        $('.dot').show();
        $('.three').css('background-color', '#717171');
        $('.three').siblings().css('background-color', '#bbb');

        intro.addEventListener('swiped-right', () => {
            if ($('.img1').css('left') === '0px') {
                $('.img1').css({
                    'left': '100%' 
                });
                $('.img2').css({
                    'left': '0px'
                });
                $('.two').css('background-color', '#717171');
                $('.two').siblings().css('background-color', '#bbb');
                $('.img3').css({
                    'left': '-100%'
                });
            } else if ($('.img2').css('left') === '0px') {
                $('.one').css('background-color', '#717171');
                $('.one').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '200%' 
                });
                $('.img2').css({
                    'left': '100%'
                });
                $('.img3').css({
                    'left': '0px'
                });
            } 
        })

        intro.addEventListener('swiped-left', () => {
            if ($('.img3').css('left') === '0px') {
                $('.two').css('background-color', '#717171');
                $('.two').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '100%' 
                    
                });
                $('.img2').css({
                    'left': '0px'
                });
                $('.img3').css({
                    'left': '-100%'
                });
            } else if ($('.img2').css('left') === '0px') {
                $('.three').css('background-color', '#717171');
                $('.three').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '0px' 
                    
                });
                $('.img2').css({
                    'left': '-100%'
                });
                $('.img3').css({
                    'left': '-200%'
                });
            } 
        })
    } else if ((x.matches || y.matches) && z.matches && f.matches) {
        //mobile landscape

        $('#workmenu').hide();

        //hide menu when scrolling down and show it when moving up
        let oldValue = 0;
        let newValue = 0;
        window.addEventListener('scroll', (e) => {
        newValue = window.pageYOffset;
        if ((oldValue + 50) < newValue) {
            $('.topMenu').slideUp('slow');
        } else if ((oldValue - 50) > newValue) {
            $('.topMenu').slideDown('slow');
        }
        oldValue = newValue;
        });
        
        //making little slideshow at pages with 3 imgs in a row
        $('.dot').show();
        $('.three').css('background-color', '#717171');
        $('.three').siblings().css('background-color', '#bbb');

        intro.addEventListener('swiped-right', () => {
            if ($('.img1').css('left') === '0px') {
                $('.img1').css({
                    'left': '100%' 
                });
                $('.img2').css({
                    'left': '0px'
                });
                $('.two').css('background-color', '#717171');
                $('.two').siblings().css('background-color', '#bbb');
                $('.img3').css({
                    'left': '-100%'
                });
            } else if ($('.img2').css('left') === '0px') {
                $('.one').css('background-color', '#717171');
                $('.one').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '200%' 
                });
                $('.img2').css({
                    'left': '100%'
                });
                $('.img3').css({
                    'left': '0px'
                });
            } 
        })

        intro.addEventListener('swiped-left', () => {
            if ($('.img3').css('left') === '0px') {
                $('.two').css('background-color', '#717171');
                $('.two').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '100%' 
                    
                });
                $('.img2').css({
                    'left': '0px'
                });
                $('.img3').css({
                    'left': '-100%'
                });
            } else if ($('.img2').css('left') === '0px') {
                $('.three').css('background-color', '#717171');
                $('.three').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '0px' 
                    
                });
                $('.img2').css({
                    'left': '-100%'
                });
                $('.img3').css({
                    'left': '-200%'
                });
            } 
        })
    }  else if ((x.matches || y.matches) && b.matches && c.matches && d.matches && a.matches) {
        //ipad menu control
        
        $('.collaborations').slideDown('slow');
        $('.open-collaborations').find('.icon').addClass('rotate');
        // $('.simulations').slideDown('slow');
        // $('.transcriptions').slideDown('slow');
        
 
 
        $('.open-simulations').on('click', () => {
            $('.simulations').slideToggle('slow');
            $('.open-simulations').find('.icon').toggleClass('rotate');
        })
        $('.open-transcriptions').on('click', () => {
            $('.transcriptions').slideToggle('slow');
            $('.open-transcriptions').find('.icon').toggleClass('rotate');
        })
        $('.open-collaborations').on('click', () => {
            $('.collaborations').slideToggle('slow');
            $('.open-collaborations').find('.icon').toggleClass('rotate');
        })

        //making little slideshow at pages with 3 imgs in a row
        $('.dot').show();
        $('.three').css('background-color', '#717171');
        $('.three').siblings().css('background-color', '#bbb');

        intro.addEventListener('swiped-right', () => {
            if ($('.img1').css('left') === '0px') {
                $('.img1').css({
                    'left': '100%' 
                });
                $('.img2').css({
                    'left': '0px'
                });
                $('.two').css('background-color', '#717171');
                $('.two').siblings().css('background-color', '#bbb');
                $('.img3').css({
                    'left': '-100%'
                });
            } else if ($('.img2').css('left') === '0px') {
                $('.one').css('background-color', '#717171');
                $('.one').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '200%' 
                });
                $('.img2').css({
                    'left': '100%'
                });
                $('.img3').css({
                    'left': '0px'
                });
            } 
        })

        intro.addEventListener('swiped-left', () => {
            if ($('.img3').css('left') === '0px') {
                $('.two').css('background-color', '#717171');
                $('.two').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '100%' 
                    
                });
                $('.img2').css({
                    'left': '0px'
                });
                $('.img3').css({
                    'left': '-100%'
                });
            } else if ($('.img2').css('left') === '0px') {
                $('.three').css('background-color', '#717171');
                $('.three').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '0px' 
                    
                });
                $('.img2').css({
                    'left': '-100%'
                });
                $('.img3').css({
                    'left': '-200%'
                });
            } 
        })
    } else if ((x.matches || y.matches) && b.matches && c.matches && d.matches) {
        //making little slideshow at pages with 3 imgs in a row
        $('.dot').show();
        $('.three').css('background-color', '#717171');
        $('.three').siblings().css('background-color', '#bbb');

        intro.addEventListener('swiped-right', () => {
            if ($('.img1').css('left') === '0px') {
                $('.img1').css({
                    'left': '100%' 
                });
                $('.img2').css({
                    'left': '0px'
                });
                $('.two').css('background-color', '#717171');
                $('.two').siblings().css('background-color', '#bbb');
                $('.img3').css({
                    'left': '-100%'
                });
            } else if ($('.img2').css('left') === '0px') {
                $('.one').css('background-color', '#717171');
                $('.one').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '200%' 
                });
                $('.img2').css({
                    'left': '100%'
                });
                $('.img3').css({
                    'left': '0px'
                });
            } 
        })

        intro.addEventListener('swiped-left', () => {
            if ($('.img3').css('left') === '0px') {
                $('.two').css('background-color', '#717171');
                $('.two').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '100%' 
                    
                });
                $('.img2').css({
                    'left': '0px'
                });
                $('.img3').css({
                    'left': '-100%'
                });
            } else if ($('.img2').css('left') === '0px') {
                $('.three').css('background-color', '#717171');
                $('.three').siblings().css('background-color', '#bbb');
                $('.img1').css({
                    'left': '0px' 
                    
                });
                $('.img2').css({
                    'left': '-100%'
                });
                $('.img3').css({
                    'left': '-200%'
                });
            } 
        })
    } 
    
    else {
        //open only collaborations
    $('.collaborations').slideDown('slow');
    $('.open-collaborations').find('.icon').addClass('rotate');
    
    //open simulations
    $('.open-simulations').on('click', () => {
            $('.simulations').slideToggle('slow');
            $('.transcriptions').slideUp('slow');
            $('.open-simulations').find('.icon').toggleClass('rotate');
            $('.open-transcriptions').find('.icon').removeClass('rotate');
        })

    //open transcriptions
    $('.open-transcriptions').on('click', () => {
            $('.transcriptions').slideToggle('slow');
            $('.simulations').slideUp('slow');
            $('.open-transcriptions').find('.icon').toggleClass('rotate');
            $('.open-simulations').find('.icon').removeClass('rotate');
        })

        //click on picture to highlight the picture and make background blurry
        let highlightClass;
        let longPic;

        $('img').on('click', event => {
            if ($('h1').prop('style').color == 'white' ) {
                highlightClass = 'highlight-invert';
                longPic = 'highlight-long-invert';
            } else {
                highlightClass = 'highlight';
                longPic = 'highlight-long';
            }

                const image = $(event.currentTarget).attr('src');

                const blur = $(document.createElement('div')).attr('id', 'blur');
                blur.addClass('blurry');
                blur.appendTo($('body'));

                const img = $('<img />',
                { id: 'highlightIMG',
                src: image,
                });
                

                let longPics = [
                    "IMG_6517.jpg",
                    "IMG_6518.jpg",
                    "IMG_6516.jpg",
                    "856B9F5F-82AF-44CC-B6DB-78328EEBE107.jpg",
                    "Luna.jpg",
                    "Mercury.jpg",
                    "Venus.jpg",
                    "Sol.jpg",
                    "Mars.jpg",
                    "Jupiter.jpg",
                    "Saturn.jpg",
                    "GovernorsoftheAether_8.JPG",
                    "MG_123.JPG",
                    "Fig3.2.jpg",
                    "Fig4.1.jpg",
                    "Fig4.2.jpg",
                    "20170728_openaxis_graphic.jpg",
                    "Impossible_Interaction.jpg"
                ]

                for (let i = 0; i < longPics.length; i++) {
                    if (image === longPics[i]) {
                        img.addClass(longPic);
                    } else {
                        img.addClass(highlightClass);
                    }
                }

                img.appendTo($('body'));

                $('#highlightIMG').addClass('animateDown');

                $('#blur').on('click', () => {
                    $('#highlightIMG').remove();
                    $('#blur').remove();
                })
        }) 
    }

    //add ranodom glitch effects over the page
    const array = [
        '.title',
        '.subtitle',
        '.img1',
        '.img2',
        '.img3',
        '.random-text',
        '#Location',
        '#Materials',
        '#Software',
        'hr',
        '.open-simulations',
        '.open-transcriptions',
        '.open-collaborations',
        'h1',
        '.menuu',
        ".simulations",
        ".transcriptions", 
        ".collaborations"
    ]

    let element;

    const glitcher = (elemToRemove) => {
        removeClass(elemToRemove);
        let randIndex = Math.floor(Math.random() * array.length - 1);
        element = array[randIndex];
        $(element).addClass('distort');
        newGlitcher = setTimeout(glitcher, 25000, element);
    }

    const removeClass = (elemToRemove) => {
        $(elemToRemove).removeClass('distort');
    }

    startGlitcher = setTimeout(glitcher, 25000);
})
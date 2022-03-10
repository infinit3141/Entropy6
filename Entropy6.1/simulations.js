//to get the swiping functions
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;s=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!a)return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),e.addEventListener("touchend",function(t){if(s!==t.target)return;var e=parseInt(l(s,"data-swipe-threshold","20"),10),o=parseInt(l(s,"data-swipe-timeout","500"),10),c=Date.now()-r,d="",p=t.changedTouches||t.touches||[];Math.abs(u)>Math.abs(i)?Math.abs(u)>e&&c<o&&(d=u>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&c<o&&(d=i>0?"swiped-up":"swiped-down");if(""!==d){var b={dir:d.replace(/swiped-/,""),touchType:(p[0]||{}).touchType||"direct",xStart:parseInt(n,10),xEnd:parseInt((p[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((p[0]||{}).clientY||-1,10)};s.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),s.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);var n=null,a=null,u=null,i=null,r=null,s=null;function l(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);


$(document).ready(() => {
    

    //make cursor pointer to note that you can open the menu
    $('.open-collaborations').css('cursor', 'pointer');
    $('.open-transcriptions').css('cursor', 'pointer');

    //mobile-device menu control
    const x = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)");
    const y = window.matchMedia("(-webkit-min-device-pixel-ratio: 2)");
    const z = window.matchMedia("(max-device-width: 820px)");
    const e = window.matchMedia("(max-device-width: 414px)");
    const a = window.matchMedia("(orientation: landscape)");
    const portrait = window.matchMedia("(orientation: portrait)");
    const f = window.matchMedia("(max-device-height: 414px)");
    //ipad menu control--------------------------------in development
    const b = window.matchMedia("(max-device-width: 1366px)");
    const c = window.matchMedia("(min-device-width: 768px)");
    const d = window.matchMedia("(min-device-height: 768px)");

    const intro = document.getElementById('intro');

    //make slideshow for resonance and repetition

    //array to put the pictures in 
    const arraySS = [
        '#ss1',
        '#ss2',
        '#ss3',
        '#ss4',
        '#ss5',
        '#ss6',
        '#ss7',
        '#ss8'
    ]

     //loop to create the same number of dots as there are pictures in the array
     for (let i = 0; i < arraySS.length; i++) {
         //create dot and add general class for dots
        let dot = $(document.createElement('div')).addClass('dot-res');
        //give the dot a specific class referencing the numberselector in the array
        let dotNumber = (i + 1).toString();
        let dotClass = dotNumber + '-res';
        dot.addClass(dotClass);
        //append dot into the div
        dot.appendTo($('.dot-container'));

//give the first dot a different color to show that the first picture is shown
    $('.1-res').css('background-color', '#717171');
    $('.1-res').siblings().css('background-color', '#bbb');
    //make next-button active, prev-button still inactive
    $('.next').addClass('button');

        //function for clicking on specific dot to show the corresponding picture and change the colors on the dots
        $('.' + dotClass).on('click', event => {
            //give the clicked dot new color and all the other dots stay #bbb
            $(event.currentTarget).css('background-color', '#717171');
            $(event.currentTarget).siblings().css('background-color', '#bbb');

            //get number out of the classname
            let number = dotClass.split('-');
            let numberNeeded = number[0];

            //use the number out of the classname to decide whether the prev- and next-button should be active
            if (Number(numberNeeded) == 1) {
                $('.prev').removeClass('button');
                $('.next').addClass('button');
            } else if (Number(numberNeeded) == arraySS.length) {
                $('.next').removeClass('button');
                $('.prev').addClass('button');
            } else {
                $('.next').addClass('button');
                $('.prev').addClass('button');
            }

            //new loop to put the right picture in place and make sure the other pictures move to the correct side
            for (let j = 0; j < arraySS.length; j++) {
                if ($(arraySS[j]).css('left') == '0px' && j != (Number(numberNeeded) -1)) {
                    $(arraySS[(Number(numberNeeded)-1)]).css('left', '0px');
                    if (j > (Number(numberNeeded) -1)) {
                        $(arraySS[j]).css('left', '100%');
                        for (let k = 0; k < arraySS.length; k++) {
                            if (k > (Number(numberNeeded) -1)) {
                                $(arraySS[k]).css('left', '100%');
                            }
                        }
                    } else {
                        $(arraySS[j]).css('left', '-100%');
                        for (let l = 0; l < arraySS.length; l++) {
                            if (l < (Number(numberNeeded) -1)) {
                                $(arraySS[l]).css('left', '-100%');
                            }
                        }
                    }                        
                }
            }
        })
    }

    //clicking on prev-button, show previous picture and move the color on the dots
    $('.prev').on('click', () => {
        for (let i = 0; i < arraySS.length; i++) {
            if ($(arraySS[i]).css('left') == '0px' && i != 0) {
                $(arraySS[i]).css('left', '100%');
                let j = i - 1;
                $(arraySS[j]).css('left', '0px');
                let number = i.toString();
                $('.' + number + '-res').css('background-color', '#717171');
                $('.' + number + '-res').siblings().css('background-color', '#bbb');
                //next-button must be active after a click on the prev-button
                $('.next').addClass('button');
            }
        }
        //if the last picture then prev-button inactive
        if ($(arraySS[1]).css("left") == "0px") {
            $('.prev').removeClass('button');
        } 
    })

    //clicking on next-button, show next picture and move the color on the dots
    $('.next').on('click', () => {
        for (let i = arraySS.length-1; i >= 0; i--) {
            if ($(arraySS[i]).css('left') == '0px' && i != arraySS.length-1) {
                $(arraySS[i]).css('left', '-100%');
                let j = i + 1;
                $(arraySS[j]).css('left', '0px');
                let number = (j + 1).toString();
                $('.' + number + '-res').css('background-color', '#717171');
                $('.' + number + '-res').siblings().css('background-color', '#bbb');
                //prev-button must be active after a click on the next-button
                $('.prev').addClass('button');
            } 
        }
        //if the first picture then next-button inactive
        if ($(arraySS[arraySS.length - 2]).css("left") == "0px") {
            $('.next').removeClass('button');
        } 
       
    })

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

        //swipe the picture to the left
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

        //swipe the picture to the right
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
        
        // $('.collaborations').slideDown('slow');
        $('.simulations').slideDown('slow');
        $('.open-simulations').find('.icon').addClass('rotate');
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
        //open only simulations
        $('.simulations').slideDown('slow');
        $('.open-simulations').find('.icon').addClass('rotate');
        
        //open collaborations
        $('.open-collaborations').on('click', () => {
                $('.collaborations').slideToggle('slow');
                $('.transcriptions').slideUp('slow');
                $('.open-collaborations').find('.icon').toggleClass('rotate');
                $('.open-transcriptions').find('.icon').removeClass('rotate');
            })

        //open transcriptions
        $('.open-transcriptions').on('click', () => {
                $('.transcriptions').slideToggle('slow');
                $('.collaborations').slideUp('slow');
                $('.open-transcriptions').find('.icon').toggleClass('rotate');
                $('.open-collaborations').find('.icon').removeClass('rotate');
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



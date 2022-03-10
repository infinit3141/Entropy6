$(document).ready(() => {
    

    //make cursor pointer to note that you can open the menu
    $('.open-simulations').css('cursor', 'pointer');
    $('.open-collaborations').css('cursor', 'pointer');

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
            $('#workmenu').animate({'margin-top': '0px'}, 200);
        } else if ((oldValue - 50) > newValue) {
            $('.topMenu').slideDown('slow');
            $('#workmenu').animate({'margin-top': '225px'}, 200);
        }
        oldValue = newValue;
        });

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
            $('#workmenu').animate({'margin-top': '0px'}, 200);
        } else if ((oldValue - 50) > newValue) {
            $('.topMenu').slideDown('slow');
            $('#workmenu').animate({'margin-top': '225px'}, 200);
        }
        oldValue = newValue;
        });
    } else if ((x.matches || y.matches) && b.matches && c.matches && d.matches && a.matches) {
        //ipad menu control
        
        $('.transcriptions').slideDown('slow');
        // $('.simulations').slideDown('slow');
        // $('.collaborations').slideDown('slow');
 
 
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
    } else {
        $("#trans-text").removeClass("group");
        $("#trans-text").addClass("group1");


    //open only transcriptions
    $('.transcriptions').slideDown('slow');
    $('.open-transcriptions').find('.icon').addClass('rotate');

    //toggle simulations
    $('.open-simulations').on('click', () => {
            $('.simulations').slideToggle('slow');
            $('.collaborations').slideUp('slow');
            $('.open-simulations').find('.icon').toggleClass('rotate');
            $('.open-collaborations').find('.icon').removeClass('rotate');
        })

    //toggle collaborations
    $('.open-collaborations').on('click', () => {
            $('.collaborations').slideToggle('slow');
            $('.simulations').slideUp('slow');
            $('.open-collaborations').find('.icon').toggleClass('rotate');
            $('.open-simulations').find('.icon').removeClass('rotate');
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

    //remove class via removeClass() from old element and choose new element from array to perform glitch on
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
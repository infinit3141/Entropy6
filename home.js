$(document).ready(() => {

let slideShowPics = [
    "P1030190.jpg",
    "DSC08836_2.jpg",
    "IMG_6517.jpg",
    "IMG_0415.JPG",
    "Artwork_Yen.jpg",
    "All.jpg",
    "NieuweVide_24.jpg",
    "MG_0964.jpg",
    "P1010522.JPG",
    // "27A6059.jpg",
    "P1011929.JPG",
    "installation_on.jpg",
    // "12651053_10153949773087718_6687757444465991789_n.jpg"
]

const y = window.matchMedia("(-webkit-min-device-pixel-ratio: 2)");
const z = window.matchMedia("(max-device-width: 1024px)");
const a = window.matchMedia("(orientation: portrait)");
// const b = window.matchMedia("(orientation: landscape)");

if (y.matches && z.matches && a.matches) {
    slideShowPics = [
    "IMG_6517.jpg",
    "IMG_6518.jpg",
    "IMG_6516.jpg",
    "856B9F5F-82AF-44CC-B6DB-78328EEBE107.jpg",
    "GovernorsoftheAether_8.JPG",
    "MG_123.JPG"
]
}

let randomImage = Math.floor(Math.random() * (slideShowPics.length));
let picNumber = randomImage;
let oldElement;

const slideShow = document.getElementById('slideshow');

const timer = () => {
    

    //to change backgroundcolor with random interval, 25% chance to change
        // white background

        if (picNumber == 0 || picNumber == 2 || picNumber == 3 || picNumber == 4 || picNumber == 5 || picNumber == 6 || picNumber == 8 || picNumber == 9 || picNumber == 11 || picNumber == 12) {
        $('body').css({
            backgroundColor: 'white',
            color: 'black'
        });
        $('.topMenu').css({borderBottom: '1px solid black'});
        $('.topMenu').css({backgroundColor: 'white'});
        $('h1').css({color: "black"});
        $('h1').html("&#x2D63")
        $('.menuu').children().css({color: 'black'});
        $('a').css('color', 'black');
        $('.menuu').children().not('.no-hover').on('mouseenter', event => {      
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.menuu').children().on('mouseleave', event => {
            $(event.currentTarget).css('color', 'black');
        })
        $('.social').find('a').on('mouseenter', event => {
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.social').find('a').on('mouseleave', event => {
            $(event.currentTarget).css('color', 'black');
        })
    }
// black background
    else if (picNumber == 1 ||picNumber == 7 ||picNumber == 10) {
        $('body').css({
            backgroundColor: 'black',
            color: 'white'
        });
        $('.topMenu').css({borderBottom: '1px solid white'});
        $('.topMenu').css({backgroundColor: 'black'});
        $('h1').css({color: "white"});
        $('h1').html("ιи.fιиιт")
        $('.menuu').children().css({color: 'white'});
        $('a').css('color', 'white');
        $('.menuu').children().not('.no-hover').on('mouseenter', event => {      //.not('#works') if you don't want works to hover
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.menuu').children().on('mouseleave', event => {
            $(event.currentTarget).css('color', 'white');
        })
        $('.social').find('a').on('mouseenter', event => {
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.social').find('a').on('mouseleave', event => {
            $(event.currentTarget).css('color', 'white');
        })

    }
    
    const randomGlitch = Math.random();
    if (randomGlitch > 0.5) {
        //add glitch effect
        $('#glitch').addClass('glitch');
        $('#glitch').find('span').show();
    } else {
        //remove glitch effect
        $('#glitch').removeClass('glitch');
        $('#glitch').find('span').hide();
    }
    

     //fade out old picture
     $('#a' + oldElement).fadeOut(3000);

    //create new picture
    let newElement = document.createElement("img");

    //append new picture into slideShow
    slideShow.appendChild(newElement);

    //give src and id attribute to new picture
    newElement.setAttribute("src", slideShowPics[picNumber]);
    const stringNumber = picNumber.toString();
    newElement.setAttribute("id", 'a'+ stringNumber);

    //give newElement position in the div
    $('#a' + stringNumber).css({
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%'
    })

    //fade in new picture
    $('#a' + stringNumber).fadeIn(3000);

    //call next picture
    randomImage = Math.floor(Math.random() * (slideShowPics.length));

    //keep searching for new picture that's not the same is the one that is showing
    while (randomImage == picNumber) {
        randomImage = Math.floor(Math.random() * (slideShowPics.length));
    }

    //set new picture
    picNumber = randomImage;

    //make current picture into oldElement for next iteration
    oldElement = stringNumber;

    //to create the loop
    myShow = setTimeout(timer, 6000);
}
timer();

//add ranodom glitch effects over the page
const array = [
    '.contact',
    '.social',
    '.menuu',
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
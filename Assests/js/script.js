
// hamburger js 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// read more ...........................................

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
 
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
function secondCardMore() {
    var secondDots = document.getElementById("secondDots");
    var secondMore = document.getElementById("secondMore");
    var secondCardMore= document.getElementById("secondCardMore");
 
  
    if (secondDots .style.display === "none") {
        secondDots .style.display = "inline";
        secondCardMore.innerHTML = "Read more";
        secondMore.style.display = "none";
    } else {
        secondDots.style.display = "none";
        secondCardMore.innerHTML = "Read less";
        secondMore.style.display = "inline";
    }
  }
function thirdCardMore() {
    var thirdDots = document.getElementById("thirdDots");
    var thirdMore = document.getElementById("thirdMore");
    var thirdCardMore= document.getElementById("thirdCardMore");
 
  
    if (thirdDots .style.display === "none") {
        thirdDots .style.display = "inline";
        thirdCardMore.innerHTML = "Read more";
        thirdMore.style.display = "none";
    } else {
        thirdDots.style.display = "none";
        thirdCardMore.innerHTML = "Read less";
        thirdMore.style.display = "inline";
    }
  }


function testMore() {
    var testdots = document.getElementById("testDots");
    var moreText = document.getElementById("testmoreOne");
    var testRead = document.getElementById("testRead");
  
    if (testdots.style.display === "none") {
        testdots.style.display = "inline";
        testRead.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        testdots.style.display = "none";
        testRead.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
  }
function homeMore() {
    var homedots = document.getElementById("homeDots");
    var moreText = document.getElementById("homemoreOne");
    var homeRead = document.getElementById("homeRead");
  
    if (homedots.style.display === "none") {
        homedots.style.display = "inline";
        homeRead.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        homedots.style.display = "none";
        homeRead.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
  }
function footerMoreFunction() {
    var footerdots = document.getElementById("footerDots");
    var footmore = document.getElementById("footMore");
    var footerMore = document.getElementById("footerMore");
  
    if (footerdots.style.display === "none") {
        footerdots.style.display = "inline";
        footerMore.innerHTML = "Read more";
        footmore.style.display = "none";
    } else {
        footerdots.style.display = "none";
        footerMore.innerHTML = "Read less";
        footmore.style.display = "inline";
    }
  }


// slider-starts........................................

$('.slider-cards').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    // centerMode: false,
    centerPadding: '0px',
    // rtl:true,
    // dots: true,
    prevArrow:
    '<div class="slick-nav card-prev-arrow"></div>',
    nextArrow:
    '<div class="slick-nav card-next-arrow"></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay:true,
          speed:600,
          arrows:false,
          dots: false,
          centerMode: true,
          centerPadding: '0px',

        }
      }
     
    ]
  });

//   clients-sliders.................................

$('.members-list').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    // dots: true,
    // prevArrow:
    // '<div class="slick-nav card-prev-arrow"></div>',
    // nextArrow:
    // '<div class="slick-nav card-next-arrow"></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay:true,
          speed:600,
          arrows:false,
          dots: false
        }
      }
     
    ]
  });
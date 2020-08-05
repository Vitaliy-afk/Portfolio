const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}))


const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const gitBar = document.querySelector('.bar-git')
const wordpressBar = document.querySelector('.bar-wordpress')
const photoshopBar = document.querySelector('.bar-photoshop')
const bootstrapBar = document.querySelector('.bar-bootstrap')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(75% - 6px)', ease: Power4.easeOut})
    .fromTo(cssBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(55% - 6px)', ease: Power4.easeOut})
    .fromTo(jsBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(35% - 6px)', ease: Power4.easeOut})
    .fromTo(gitBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(50% - 6px)', ease: Power4.easeOut})
    .fromTo(wordpressBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(30% - 6px)', ease: Power4.easeOut})
    .fromTo(photoshopBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(60% - 6px)', ease: Power4.easeOut})
    .fromTo(bootstrapBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(30% - 6px)', ease: Power4.easeOut})


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0.5
})


.setTween(t1)
.addTo(controller)


// function showRequiredCategory(event) {
//     const getId = event.id;
//     const links = document.querySelectorAll('.work-category button');
//     for (i = 0; i < links.length; i++) {
//         if (links[i].hasAttribute('class')) {
//             links[i].classList.remove('active');
//         }
//     }

//     event.classList.add('active');
//     const getCategory = document.querySelector(`.category-${getId}`);
//     const categories = document.querySelectorAll('div[class ^= "category"]');
//     for (j = 0; j < categories.length; j++) {
//         if (categories[j].hasAttribute('class')) {
//             categories[j].classList.remove('showCategory');
//             categories[j].classList.add('hideCategory');
//         }
//     }

//     getCategory.classList.remove('hideCategory');
//     getCategory.classList.add('showCategory');
// }

jQuery( document ).ready(function() {
    initBurgerMenu();
    initSlickSlider();
});


function initBurgerMenu() {
    jQuery('.burger').on('click', function(e){
        e.preventDefault()
        jQuery(this).toggleClass('open');
        jQuery('body').toggleClass('burger-active');
    });
}


function initSlickSlider() {
  jQuery('.slider-work').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
})};


const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';


const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// update dash offset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength / height);

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onscroll
window.addEventListener('scroll', () => {
  updateDashoffset();

  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});

// click
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
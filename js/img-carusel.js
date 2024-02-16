//$(document).ready(function() {
//    $('[data-fancybox="gallery"]').fancybox({
//      buttons : [
//        'slideShow',
//        'share',
//        'zoom',
//        'fullScreen',
//        'download',
//        'close'
//      ],
//      loop: true,
//      gutter : 10,
//      keyboard: true,
//      arrows: true,
//      infobar: true,
//      smallBtn: true,
//      toolbar: false,
//      protect: true,
//      modal: true,
//      idleTime: 3,
//      animationEffect: "zoom-in-out",
//      animationDuration: 600,
//      transitionEffect: "rotate",
//      transitionDuration: 400,
//      slideClass: "myClass",
//      baseClass: "myclass",
//       slideShow: {
//        autoStart: true,
//        speed: 1000
//      },
//    youtube : {
//      controls : 0,
//      showinfo : 0
//    },
//      thumbs : {
//        autoStart : true
//      }
//    })
//});


$(document).ready(function() {
    $('#owl-carousel').owlCarousel({
        loop: false,           // Включение зацикливания
        center: false,         // Позиционирует первый слайд в центре карусели.
        items: 4,              // количество элементов, отображаемых в карусели
        autoplay: false,
        autoplayTimeout: 3500,
        autoWidth:true,
        smartSpeed: 3000,
        animateIn: 'fadeIn',   //'linear',fadeIn
        animateOut: 'fadeOut',
        mouseDrag: false,      // перетаскивание слайдов мышью
        dots: false,           // навигация в виде точек
        touchDrag: false,      // перелистывание слайдов пальцем
        nav: true,
//        navText: [
//          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
//          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
//        ],
        pagination: false, // для пагинации
        margin: 10,    //Отступ справа у элементов внутри слайдера
//        responsive:{
//          0:{
//            items:1
//          },
//          768:{
//            items:2
//          },
//          1180:{
//            items:3
//          }
//        }
    })
});

$(".next_button").click(function(){
  owl.trigger("next.owl.carousel");
});
 
$(".prev_button").click(function(){
  owl.trigger("prev.owl.carousel");
});

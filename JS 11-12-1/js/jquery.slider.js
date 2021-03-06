
$(function() {
  var carousel = $('.carousel'),
    sliderContent = carousel.html(),                      // Содержимое слайдера
    slideWidth = $('.carousel-hide').outerWidth(),         // Ширина слайдера
    slideCount = $('.carousel-hide').length,               // Количество слайдов
    prev = $('.left_arrow'),                      // Кнопка "назад"
    next = $('.right_arrow'),                      // Кнопка "вперед"
    sliderInterval = 3000,                              // Интервал смены слайдов
    animateTime = 1000,                                 // Время смены слайдов
    course = 1,                                         // Направление движения слайдера (1 или -1)
    margin = - slideWidth;                              // Первоначальное смещение слайдов

  $('.carousel li:last').clone().prependTo('.carousel');   // Копия последнего слайда помещается в начало.
  $('.carousel li').eq(1).clone().appendTo('.carousel');   // Копия первого слайда помещается в конец.
  $('.carousel').css('margin-left', -slideWidth);         // Контейнер .slider сдвигается влево на ширину одного слайда.

  function nextSlide(){                                 // Запускается функция animation(), выполняющая смену слайдов.
    interval = window.setInterval(animate, sliderInterval);
  }

  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     // Если слайдер дошел до конца
      carousel.css({'marginLeft':-slideWidth});           // то блок .slider возвращается в начальное положение
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
      carousel.css({'marginLeft':-slideWidth*slideCount});// то блок .slider перемещается в конечное положение
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              // Если условия выше не сработали,
    margin = margin - slideWidth*(course);              // значение margin устанавливается для показа следующего слайда
    }
    carousel.animate({'marginLeft':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.
  }

  function sliderStop(){                                // Функция преостанавливающая работу слайдера
    window.clearInterval(interval);
  }

  prev.click(function() {                               // Нажата кнопка "назад"
    if (carousel.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = -1;                                        // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
  next.click(function() {                               // Нажата кнопка "назад"
    if (carousel.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = 1;                                         // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });

  carousel.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
    sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
  }, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.

  nextSlide();                                          // Вызов функции nextSlide()
});

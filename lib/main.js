"use strict";

require.config({
  paths: {
    'EmblaCarousel': '../node_modules/embla-carousel/lib/index'
  }
});

require(['EmblaCarousel'], function (EmblaCarousel) {
  const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
    prevBtn.addEventListener('click', embla.scrollPrev, false);
    nextBtn.addEventListener('click', embla.scrollNext, false);
  };

  const wrap = document.querySelector('.embla');
  const viewPort = wrap.querySelector('.embla__viewport');
  const prevBtn = wrap.querySelector('.embla__button--prev');
  const nextBtn = wrap.querySelector('.embla__button--next');
  const embla = EmblaCarousel(viewPort, {
    loop: false
  });
  setupPrevNextBtns(prevBtn, nextBtn, embla);
  embla.on('select', setSelectedDotBtn);
  embla.on('init', setSelectedDotBtn);
});
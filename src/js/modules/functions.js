import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";
import Scrollbar from 'smooth-scrollbar';
import Swiper, { Autoplay, Pagination } from 'swiper';
// import { Chart } from 'chart.js/dist/chart.js';
import ApexCharts from 'apexcharts'

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const customScroll = () => {
  let bodyScrollBar = Scrollbar.init(document.body, {
    damping: 0.1,
    delegateTo: document,
  });
  ScrollTrigger.scrollerProxy(".wrapper", {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
  });
  bodyScrollBar.addListener(ScrollTrigger.update);
}

export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  });
}

export const anchors = () => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger')
    const menu = document.querySelector('.header-menu')
    const body = document.querySelector('body')

    let toggleBurger = () => {
      if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')
      } else {
        openBtn.classList.add('active')
        menu.classList.add('active')
        body.classList.add('lock')
      }
    }

    openBtn.addEventListener('click', toggleBurger)
  }
}

export const modal = () => {
  if (document.querySelector('.modal-open-btn')) {
    const openBtn = document.querySelectorAll('.modal-open-btn')
    const modal = document.querySelector('.contactus')
    const modalBg = document.querySelector('.contactus__bg')
    const body = document.querySelector('body')
    const content = document.querySelectorAll('.container')

    let toggleModal = (e) => {
      e.preventDefault()

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active')
        body.classList.remove('lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1320px`
            item.style.padding = ` 0 20px`
          })
        }
      } else {
        modal.classList.add('active')
        body.classList.add('lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1320 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`
          })
        }
      }
    }

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal)
    })
    modalBg.addEventListener('click', toggleModal)
  }
}

export const parallax = () => {
  if (document.documentElement.clientWidth > 1000) { // disable script if resolution less than 1000px 

    let bg = document.querySelector('.kanuvoye-pomesucud');
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });

  }
}

export const spoilerJQ = () => {
  $(document).ready(function () {
    $('.spoiler__btn').click(function (event) {
      if ($('.services__body').hasClass('one')) {
        $('.spoiler__btn').not($(this)).removeClass('active');
        $('.services__item-content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300)
    });
  });
}

export const sticky = () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { myFunction() };

  // Get the header
  let header = document.getElementById("myHeader");

  // Get the offset position of the navbar
  let sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

export const tabs = () => {
  let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      let id = this.getAttribute('data-tab'),
        content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
}

export const upBtn = () => {

  document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
      click.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
}

export const spoiler = () => {
  if (document.querySelector('.faq-item')) {
    const spolierItems = document.querySelectorAll('.faq-item')

    spolierItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
          item.classList.remove('active')
        } else {
          spolierItems.forEach(i => {
            i.classList.remove('active')
          })
          item.classList.add('active')
        }
      })
    })
  }
}

// sliders
export const mainMobileSlider = () => {
  if (document.querySelector('.main__slider')) {
    const mainMobileSlider = new Swiper('.main__slider', {
      modules: [Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }
}

export const descriptionMobileSlider = () => {
  if (document.querySelector('.description-body__slider')) {
    const descriptionMobileSlider = new Swiper('.description-body__slider', {
      modules: [Autoplay, Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".description-body__slider-pagination",
        clickable: true,
      },
    });
  }
}

export const advantagesSlider = () => {
  if (document.querySelector('.advantages-body')) {
    let advantagesSlider = new Swiper('.advantages-body', {
      modules: [Autoplay, Pagination],
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: ".advantages-body__pagination",
        clickable: true,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }
    });
  }
}

export const partnersSlider = () => {
  if (document.querySelector('.partners-slider')) {
    const partnersSlider = new Swiper('.partners-slider', {
      modules: [Autoplay, Pagination],
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".partners-slider__pagination",
        clickable: true,
      },
      breakpoints: {
        993: {
          spaceBetween: 42,
        },
      }
    });
  }
}

export const heroesSlider = () => {
  if (document.querySelector('.heroes-slider')) {
    const heroesSlider = new Swiper('.heroes-slider', {
      modules: [Pagination],
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 50,
      pagination: {
        el: ".heroes-slider__pagination",
        clickable: true,
      },
    });
  }
}

export const raritySlider = () => {
  if (document.querySelector('.rarity-slider')) {
    const heroesSlider = new Swiper('.rarity-slider', {
      modules: [Autoplay, Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 1000,
      pagination: {
        el: ".rarity-slider__pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }
}



export const descriptionScrollText = () => {
  if (window.innerWidth > 992) {
    gsap.set(".description-body__wrap-item", { zIndex: (i, target, targets) => targets.length - i });

    let descriptionTexts = gsap.utils.toArray('.description-body__wrap-item');

    descriptionTexts.forEach((text, i) => {

      let descriptionTl = gsap.timeline({

        scrollTrigger: {
          trigger: "section.description",
          start: () => "top -" + (window.innerHeight * i),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }

      })

      descriptionTl
        // .to(text, { duration: 0.33, opacity: 1, y: "50%" })
        // .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66)
        .to(text, { duration: 0.33, opacity: 1, x: "50%" })
        .to(text, { duration: 0.33, opacity: 0, x: "0%" }, 0.66)
        ;

    });



    ScrollTrigger.create({

      trigger: "section.description",
      // scroller: ".wrapper",
      scrub: true,
      pin: true,
      start: () => "top top",
      // end: () => "+=" + ((images.length + 1) * window.innerHeight),
      end: () => "+=" + ((descriptionTexts.length) * window.innerHeight),
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progressLine = document.querySelector('.description-progress__item')
        progressLine.style.setProperty('--descrProgressPercent', self.progress * 100)
        const progress = document.querySelector('.description-progress__percent')
        if (self.progress < 0.84) {
          progress.innerHTML = `${Math.round((self.progress + 0.16) * 100)}%`
          if (self.progress >= 0.82) {
            progress.innerHTML = `100%`
          }
        }
      },

    });
  }
}

export const halveningScrollAnim = () => {
  // gsap.set(".halvening-descr__coin img", { zIndex: (i, target, targets) => targets.length - i });

  // let halveningImgs = gsap.utils.toArray('.halvening-descr__coin img');

  // halveningImgs.forEach((text, i) => {

  //   let halveningTl = gsap.timeline({

  //     scrollTrigger: {
  //       trigger: "section.halvening",
  //       start: () => "-200",
  //       end: () => "2000",
  //       scrub: true,
  //       toggleActions: "play none reverse none",
  //       invalidateOnRefresh: true,
  //     }

  //   })

  //   halveningTl
  //     .to(text, { duration: 0.33, opacity: 1, y: "0%" }, -2.9);

  // });



  ScrollTrigger.create({

    trigger: "section.halvening",
    // scroller: ".wrapper",
    scrub: true,
    pin: false,
    // start: () => "top top",
    start: () => `-${window.innerHeight * 0.1}`,
    end: () => "1000",
    // end: () => "+=" + ((images.length + 1) * window.innerHeight),
    // end: () => "+=" + ((halveningImgs.length + 1) * window.innerHeight),
    invalidateOnRefresh: true,
    onEnter: self => {
      const coin = document.querySelector('.halvening-descr__coin')
      coin.classList.add('show')
    },
  });
}

export const heroesScrollAnim = () => {
  if (window.innerWidth > 992) {

    gsap.set(".heroes__image-item", { zIndex: (i, target, targets) => targets.length - i });

    let heroesImages = gsap.utils.toArray('.heroes__image-item');

    heroesImages.forEach((image, i) => {

      let tl = gsap.timeline({

        scrollTrigger: {
          trigger: "section.heroes",
          // scroller: ".wrapper",
          start: () => "top -" + (window.innerHeight * (i)),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }

      })

      tl
        // .to(image, { duration: 0.33, opacity: 1, y: "50%" })
        // .to(image, { duration: 0.33, opacity: 0, y: "20%", scale: "0.5" }, 0.66)
        .to(image, { duration: 0.33, opacity: 1, y: "50%" })
        .to(image, { duration: 0.33, opacity: 0, y: "50%", x: "-100%" }, 0.66)
        ;

    });





    gsap.set(".heroes-text__item", { zIndex: (i, target, targets) => targets.length - i });

    let heroesTexts = gsap.utils.toArray('.heroes-text__item');

    heroesTexts.forEach((text, i) => {

      let tl = gsap.timeline({

        scrollTrigger: {
          trigger: "section.heroes",
          start: () => "top -" + (window.innerHeight * i),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }

      })

      tl
        .to(text, { duration: 0.33, opacity: 1, y: "50%" })
        .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66)
        ;

    });



    ScrollTrigger.create({

      trigger: "section.heroes",
      scrub: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + ((heroesImages.length) * window.innerHeight),
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progress = document.querySelector('.heroes-progress__percent')
        const progressLine = document.querySelector('.heroes-progress__line')
        progressLine.style.setProperty('--heroesProgressPercent', self.progress * 100)
        if (self.progress > 0 && self.progress < 0.33) {
          progress.innerHTML = `1/3`
        }
        if (self.progress > 0.33 && self.progress < 0.63) {
          progress.innerHTML = `2/3`
        }
        if (self.progress > 0.63 && self.progress < 1) {
          progress.innerHTML = `3/3`
        }
      },

    });
  }
}

export const rarityScrollAnim = () => {
  if (window.innerWidth > 992) {

    gsap.set(".rarity-image__item", { zIndex: (i, target, targets) => targets.length - i });

    let rarityImages = gsap.utils.toArray('.rarity-image__item');

    rarityImages.forEach((image, i) => {

      let rarityTl = gsap.timeline({

        scrollTrigger: {
          trigger: "section.rarity",
          // scroller: ".wrapper",
          start: () => "top -" + (window.innerHeight * (i)),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }

      })

      rarityTl
        // .to(image, { duration: 0.33, opacity: 1, y: "50%" })
        // .to(image, { duration: 0.33, opacity: 0, y: "20%", scale: "0.5" }, 0.66)
        .to(image, { duration: 0.33, opacity: 1, y: "50%" })
        .to(image, { duration: 0.33, opacity: 0, y: "100%" }, 0.66)
        ;

    });





    gsap.set(".rarity-image__card-item", { zIndex: (i, target, targets) => targets.length - i });

    let rarityTexts = gsap.utils.toArray('.rarity-image__card-item');

    rarityTexts.forEach((text, i) => {

      let rarityTl2 = gsap.timeline({

        scrollTrigger: {
          trigger: "section.rarity",
          start: () => "top -" + (window.innerHeight * i),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }

      })

      rarityTl2
        .to(text, { duration: 0.33, opacity: 1, y: "50%" })
        .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66)
        ;

    });



    ScrollTrigger.create({

      trigger: "section.rarity",
      scrub: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + ((rarityImages.length) * window.innerHeight),
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progress = document.querySelector('.rarity-progress__line-item')
        const shurikens = document.querySelectorAll('.rarity-progress__shurikens-item')
        const infoItems = document.querySelectorAll('.rarity-progress__info-item')
        progress.style.setProperty('--p', self.progress * 70)
        if (self.progress > 0 && self.progress < 0.25) {
          infoItems.forEach(item => {
            item.classList.remove('active')
          })
          infoItems[0].classList.add('active')
        }
        if (self.progress > 0.25 && self.progress < 0.50) {
          infoItems.forEach(item => {
            item.classList.remove('active')
          })
          infoItems[1].classList.add('active')
        }
        if (self.progress > 0.5 && self.progress < 0.75) {
          infoItems.forEach(item => {
            item.classList.remove('active')
          })
          infoItems[2].classList.add('active')
        }
        if (self.progress > 0.75 && self.progress < 1) {
          infoItems.forEach(item => {
            item.classList.remove('active')
          })
          infoItems[3].classList.add('active')
        }

        if (self.progress > 0.15) {
          shurikens[0].classList.add('active')
        } else {
          shurikens[0].classList.remove('active')
        }
        if (self.progress > 0.39) {
          shurikens[1].classList.add('active')
        } else {
          shurikens[1].classList.remove('active')
        }
        if (self.progress > 0.63) {
          shurikens[2].classList.add('active')
        } else {
          shurikens[2].classList.remove('active')
        }
      },

    });
  }
}

export const ecosystemScrollAnim = () => {


  gsap.set(".ecosystem__img", { zIndex: (i, target, targets) => targets.length - i });

  let ecosysImages = gsap.utils.toArray('.ecosystem__img');
  let ecosysText = gsap.utils.toArray('.ecosystem__text-item');

  ecosysImages.forEach((image, i) => {

    let ecosysTl = gsap.timeline({

      scrollTrigger: {
        ease: 'power3',
        trigger: "section.ecosystem",
        // start: () => "top -" + (window.innerHeight * (i)),
        // start: () => "top -" + (window.innerHeight),
        start: () => "top",
        // start: () => "top top",
        // end: () => "+=" + window.innerHeight,
        end: () => "+=2000",
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      }

    })

    ecosysTl
      // .to(image, { duration: 0.33, opacity: 1, y: "50%" })
      // .to(image, { duration: 0.33, opacity: 0, y: "20%", scale: "0.5" }, 0.66)
      // .to(image, { duration: 0.33, opacity: 1, y: "-100%" })
      .to(image, { duration: 0.33, y: `-${50 * (i + 1)}%` })
      // .to(image, { duration: 0.33, opacity: 0, y: "100%" }, 0.66)
      ;

  });




  let ecosysTextTl = gsap.timeline({
    scrollTrigger: {
      ease: 'power3',
      trigger: "section.ecosystem",
      // start: () => "top -" + (window.innerHeight * (i)),
      // start: () => "top -" + (window.innerHeight),
      start: () => "top",
      // start: () => "top top",
      // end: () => "+=" + window.innerHeight,
      end: () => "+=2000",
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,
    }
  })

  ecosysTextTl
    .to(ecosysText, {
      duration: 0.33, text: 'Our 4999 algorithmically generated Heroes <span><img src="./img/icons/text-ico05.svg" alt=""></span> are no ordinary NFTs. They are simply <span><img src="./img/icons/text-ico07.svg" alt=""></span> the beginning of a much larger ecosystem. Each hero is unique both <span><img src="./img/icons/text-ico02.svg" alt=""></span> in their looks and their Combat Stats. <span><img src="./img/icons/text-ico06.svg" alt=""></span> ALL 4999 Heroes generate $METAL the fuel that is burned to run the Code <span><img src="./img/icons/text-ico01.svg" alt=""></span> Metal ecosystem.'
    });


  // gsap.to(ecosysText, {
  //   duration: 0.33, text: "Our 4999 algorithmically generated Heroes are no ordinary NFTs.They are simply the beginning of a much larger ecosystem. Each hero is unique both in their looks and their Combat Stats. ALL 4999 Heroes generate $METAL the fuel that is burned to run the Code Metal ecosystem."
  // });



  ScrollTrigger.create({

    trigger: "section.ecosystem",
    scrub: true,
    pin: true,
    start: () => "top top",
    end: () => "+=2000",
    invalidateOnRefresh: true,
    onUpdate: self => {
      const text = document.querySelector('.ecosystem__text p')
      text.style.backgroundPosition = `${-self.progress * 100}% 0`;
    },
  });


  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-4, 4); // don't let the skew go beyond 20 degrees. 

  ScrollTrigger.create({
    trigger: "section.ecosystem",
    start: () => "top top",
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
      }
    }
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
}

export const chart = () => {
  const ctx = document.getElementById('myChart').getContext("2d");

  var gradient = ctx.createLinearGradient(0, 0, 0, 510);
  gradient.addColorStop(0, 'rgba(250,174,50,1)');
  gradient.addColorStop(1, 'rgba(250,174,50,0)');

  const data = {
    labels: [25, 50, 75, 100, 125, 150],
    datasets: [
      {
        // fillColor: gradient,
        label: 'Dataset',
        data: [1250, 800, 600, 400, 200, 0],
        borderColor: '#74172A',
        backgroundColor: '#FFFFFF',
        pointStyle: 'circle',
        pointRadius: 2,
        pointHoverRadius: 6,
        tension: 0.5,
        fill: {
          target: 'origin',
          // above: '#441720',   // Area will be red above the origin
          // above: '#4417209b',   // Area will be red above the origin
          above: '#6b1d2d71',   // Area will be red above the origin
          // above: 'linear-gradient(180deg, rgba(116,24,42,1) 0%, rgba(116,24,42,0) 100%)',
          // above: 'linear-gradient(180deg, #fff 0%, #000 100%)',
          // backgroundColor: 'linear-gradient(180deg, rgba(19,0,255,1) 0%, rgba(0,0,0,1) 100%)'
        }
      }
    ]
  };

  const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
      }
    },
    // interaction: {
    //   intersect: false,
    // },
    // scales: {
    //   x: {
    //     display: true,
    //     title: {
    //       display: true
    //     }
    //   },
    //   y: {
    //     display: true,
    //     // suggestedMin: -10,
    //     // suggestedMax: 200
    //     grid: {
    //       drawOnChartArea: false, // only want the grid lines for one axis to show up
    //     },
    //   }
    // }
  });
}

export const apexChart = () => {
  var options = {
    chart: {
      type: 'area',
      height: 440,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    series: [{
      name: 'METAL',
      data: [1250, 800, 600, 350, 125, 50, 25, 0],
    }],
    xaxis: {
      type: 'numeric',
      min: 1,
      max: 7,
      crosshairs: false,
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: true,
        color: '#343434',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: false,
        borderType: 'solid',
        color: '#78909C',
        height: 6,
        offsetX: 0,
        offsetY: 0
      },
    },
    yaxis: {
      max: 1250,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      lineCap: 'but',
    },
    fill: {
      colors: ['#6A1828'],
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: "vertical",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.2,
        stops: [0, 100],
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#6A1828',
      }
    },
    grid: {
      show: true,
      borderColor: 'rgba(255, 255, 255, 0.05)',
      position: 'back',
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `
        <div class="halvening-chart__tooltip">  
        <span class="halvening-chart__tooltip-y">METAL - ${series[seriesIndex][dataPointIndex]}</span>
        <span class="halvening-chart__tooltip-x">(i) -${Math.round(w.globals.labels[dataPointIndex])}%</span>
        </div>
        `
      }
    }
  }

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
}

export const soundBtn = () => {
  if (document.querySelector('.header__sound')) {
    const soundBtn = document.querySelector('.header__sound')
    soundBtn.addEventListener('click', () => {
      if (soundBtn.classList.contains('active')) {
        soundBtn.classList.remove('active')
      } else {
        soundBtn.classList.add('active')
      }
    })
  }
}

export const cursorLight = () => {
  const body = document.querySelector('body')

  body.addEventListener('mousemove', e => {

    mouseCoords(e)

    cursor.classList.remove('hidden')

  })

  const cursor = document.getElementById('cursor__light')

  let mouseX = 0, mouseY = 0, posX = 0, posY = 0

  function mouseCoords(e) {

    mouseX = e.pageX
    mouseY = e.pageY

  }

  gsap.to({}, .01, {

    repeat: -1,

    onRepeat: () => {

      posX += (mouseX - posX) / 5
      posY += (mouseY - posY) / 5

      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      })
    }

  })

  body.addEventListener('mouseout', () => {
    cursor.classList.add('hidden')
  })

}
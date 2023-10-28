// // // locomotive js
const scroller = new LocomotiveScroll({
    el: document.querySelector('.mein'),
    smooth: true
  });
// 

// progress bar
const progressAnimation = gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: {
    scroller: new LocomotiveScroll({ el: document.querySelector('.mein'), smooth: true }),
    scrub: 0.3,
  },
});

progressAnimation.scrollTrigger.update();

// // auto Number count 
gsap.from(".page-6", {
  scrollTrigger: {
    trigger: ".page-6",
    start: "top 100%",
    onEnter: autoNumber, 
    onEnterBack: autoNumber, 
  },
});
function autoNumber() {
  // firstH1 autoNumber 

  let firstH1 = document.getElementById("page-6-right-box-h1-1");
  let i = 0;
  const increment = 1;

  function updateText() {
    firstH1.innerHTML = `${i}`;
    i += increment;
    if (i <= 40) {
      setTimeout(updateText, 50);
    }
  }
  updateText();

  // secondH1 autoNumber
  let secondH1 = document.getElementById("page-6-right-box-h1-2");
  for (let i = 0; i < 561; i++) {
    setTimeout(() => {
      secondH1.innerHTML = `${i}`
    }, i * 10)
  }

  // third autoNumber

  let thirdH1 = document.getElementById("page-6-right-box-h1-3");
  for (let i = 0; i < 901; i++) {
    setTimeout(() => {
      thirdH1.innerHTML = `${i}`
    }, i * 4)
  }


  // fourth autoNumber

  let fourth = document.getElementById("page-6-right-box-h1-4");
  for (let i = 0; i < 21; i++) {
    setTimeout(() => {
      fourth.innerHTML = `${i}`
    }, i * 50)
  }

}


gsap.from(".page-1", {
  scrollTrigger: {
    trigger: ".page-1",
    start: "top 100%",
    onEnter: pageOneAni, 
  },
});
function pageOneAni() {

  gsap.from(".page-1-right-left-part ", {
    x: 300,
    opacity: 0,
    duration: 1,
  })

  gsap.from(".page-1-right-right-part-row-3 ", {
    y: -300,
    opacity: 0,
    duration: 1,
  })
  gsap.from(".page-1-right-right-part-row-4", {
    y: 300,
    opacity: 0,
    duration: 2,
  })
  gsap.from(".page-1-right-right-part-row-5", {
    scale: 0,
    opacity: 0,
    duration: 2,
  })
}
gsap.from(".page-2", {
  scrollTrigger: {
    trigger: ".page-2",
    start: "top 100%",
    onEnter: pageTowAni,
  },
});
function pageTowAni() {
  gsap.from(".page-2-left-box ", {
    x: 700,
    opacity: 0,
    duration: .5,
  })
  gsap.from(".page-2-right", {
    x: -700,
    opacity: 0,
    duration: .5,
  })
  gsap.from(".page-2-left-img", {
    x: -700,
    opacity: 0,
    duration: .5,
    delay: .5
  })

}

// pageThreeAni

gsap.from(".page-3-row-2", {
  scrollTrigger: {
    trigger: ".page-3-row-2",
    start: "top 100%",
    onEnter: pageThreeAni,
  },
});
function pageThreeAni(){
  gsap.from(".page-3-row-2,.page-3-row-2-box", {
  y: 400,
  opacity: 0,
  duration:1,
  stagger: 0.1
})
}
// pageFiveAni

gsap.from(".page-5", {
  scrollTrigger: {
    trigger: ".page-5",
    start: "top 100%",
    onEnter: pageFiveAni,
  },
});

function pageFiveAni(){
  gsap.from(".page-5-row-2-box", {
  y: 400,
  opacity: 0,
  duration: 1,
  stagger: 0.1
})
};

// pageSixAni
gsap.from(".page-6", {
  scrollTrigger: {
    trigger: ".page-6",
    start: "top 100%",
    onEnter: pageSixAni,
  },
});
function pageSixAni(){
  gsap.from(".page-6-left", {
  x: -400,
  duration: 1.5,
  stagger: 0.1
})
gsap.from(".page-6-right", {
  y: 400,
  opacity: 0,
  duration: 1.5,
  stagger: 0.1
})
}

// pageSevenAni
gsap.from(".page-7", {
  scrollTrigger: {
    trigger: ".page-7",
    start: "top 100%",
    onEnter: pageSevenAni,
    onEnterBack: pageSevenAni,
  },
});
function pageSevenAni(){
  gsap.from(".page-7-main", {
  y: 400,
  opacity: 0,
  duration: 1,
  stagger: 0.1
})}
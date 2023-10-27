// // // locomotive js
// const scroller = new LocomotiveScroll({
//     el: document.querySelector('.mein'),
//     smooth: true
//   });

// progress bar 
// gsap.registerPlugin(ScrollTrigger);
// gsap.to('progress', {
//   value: 100,
//   ease: 'none',
//   scrollTrigger: { scrub: 0.3 }
// });

// // auto Number count 
gsap.to(".page-6", {
  opacity: 1,
  dealy: 2,
  scrollTrigger: {
    trigger: ".page-6",
    start: "top 100%", // When the top of the element reaches the center of the viewport
    // When the bottom of the element reaches the center of the viewport
    onEnter: autoNumber, // Function to run when the element enters the trigger area
    onEnterBack: autoNumber, // Function to run when the element enters the trigger area from the bottom
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
gsap.to(".page-1", {
  opacity: 1,
  dealy: 2,
  scrollTrigger: {
    trigger: ".page-1",
    start: "top 100%", // When the top of the element reaches the center of the viewport
    // When the bottom of the element reaches the center of the viewport
    onEnter: pageOneAni, // Function to run when the element enters the trigger area
    onEnterBack: pageOneAni, // Function to run when the element enters the trigger area from the bottom
  },
});
function pageOneAni() {

  gsap.from(".page-1-right-left-part ", {
    x: 300,
    opacity: 1,
    duration: 2,
  })

  gsap.from(".page-1-right-right-part-row-3 ", {
    y: -300,
    opacity: 1,
    duration: 2,
  })
  gsap.from(".page-1-right-right-part-row-4", {
    y: 300,
    opacity: 1,
    duration: 2,
  })
  gsap.from(".page-1-right-right-part-row-5", {
    scale: 0,
    opacity: 1,
    duration: 2,
  })
}
gsap.to(".page-2", {
  opacity: 1,
  dealy: 2,
  scrollTrigger: {
    trigger: ".page-2",
    start: "top 100%",
    onEnter: pageTowAni,
    onEnterBack: pageTowAni,
  },
});
function pageTowAni() {
  gsap.from(".page-2-left-box ", {
    x: 700,
    opacity: 1,
    duration: 2,
  })
  gsap.from(".page-2-right", {
    x: -700,
    opacity: 1,
    duration: 2,
  })
  gsap.from(".page-2-left-img", {
    x: -700,
    opacity: 1,
    duration: 2,
    delay: 1
  })

}
gsap.to(".page-3-row-2", {
  opacity: 1,
  dealy: 2,
  scrollTrigger: {
    trigger: ".page-3-row-2",
    start: "top 100%",
    onEnter: pageThreeAni,
    onEnterBack: pageThreeAni,
  },
});
function pageThreeAni(){
  gsap.from(".page-3-row-2,.page-3-row-2-box", {
  y: 400,
  opacity: 1,
  duration: 2,
  stagger: 0.1
})
}
gsap.to(".page-5", {
  opacity: 1,
  dealy: 2,
  scrollTrigger: {
    trigger: ".page-5",
    start: "top 100%",
    onEnter: pageFiveAni,
    onEnterBack: pageFiveAni,
  },
});

function pageFiveAni(){
  gsap.from(".page-5-row-2-box", {
  y: 400,
  opacity: 1,
  duration: 2,
  stagger: 0.1
})
};

gsap.to(".page-6", {
  opacity: 1,
  dealy: 2,
  scrollTrigger: {
    trigger: ".page-6",
    start: "top 100%",
    onEnter: pageSixAni,
    onEnterBack: pageSixAni,
  },
});
function pageSixAni(){
  gsap.from(".page-6-left", {
  x: -400,
  opacity: 1,
  duration: 2,
  stagger: 0.1
})
gsap.from(".page-6-right", {
  y: 400,
  opacity: 1,
  duration: 2,
  stagger: 0.1
})
}
gsap.to(".page-7", {
  opacity: 1,
  dealy: 2,
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
  opacity: 1,
  duration: 2,
  stagger: 0.1
})}
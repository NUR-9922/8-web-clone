// // // locomotive js
// const scroller = new LocomotiveScroll({
//     el: document.querySelector('.mein'),
//     smooth: true
//   });

// progress bar 
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

// // auto Number count 
// gsap.to(".page-6", {
//   opacity: 1,
//   dealy: 2,
//   scrollTrigger: {
//     trigger: ".page-6",
//     start: "top 100%", // When the top of the element reaches the center of the viewport
//     // When the bottom of the element reaches the center of the viewport
//     onEnter: autoNumber, // Function to run when the element enters the trigger area
//     onEnterBack: autoNumber, // Function to run when the element enters the trigger area from the bottom
//     markers: true
//   },
// });
// function autoNumber() {
//   // firstH1 autoNumber 

//   let firstH1 = document.getElementById("page-6-right-box-h1-1");
//   let i = 0;
//   const increment = 1;

//   function updateText() {
//     firstH1.innerHTML = `${i}`;
//     i += increment;
//     if (i <= 40) {
//       setTimeout(updateText, 50);
//     }
//   }
//   updateText();

//   // secondH1 autoNumber
//   let secondH1 = document.getElementById("page-6-right-box-h1-2");
//   for (let i = 0; i < 561; i++) {
//     setTimeout(() => {
//       secondH1.innerHTML = `${i}`
//     }, i * 10)
//   }

//   // third autoNumber

//   let thirdH1 = document.getElementById("page-6-right-box-h1-3");
//   for (let i = 0; i < 901; i++) {
//     setTimeout(() => {
//       thirdH1.innerHTML = `${i}`
//     }, i * 4)
//   }


//   // fourth autoNumber

//   let fourth = document.getElementById("page-6-right-box-h1-4");
//   for (let i = 0; i < 21; i++) {
//     setTimeout(() => {
//       fourth.innerHTML = `${i}`
//     }, i * 50)
//   }

// }




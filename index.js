// window.addEventListener("scroll", reveal);

// // To check the scroll position on page load
// reveal(".num");


// // let valueDisplays = document.querySelectorAll(".num");
// // let interval = 4000;
// // valueDisplays.forEach((valueDisplay) => {
// //   let startValue = 0;
// //   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
// //   let duration = Math.floor(interval / endValue);
// //   let counter = setInterval(function () {
// //     startValue += 1;
// //     valueDisplay.textContent = startValue;
// //     if (startValue == endValue) {
// //       clearInterval(counter);
// //     }
// //   }, duration);
// // });



// const handleOnMouseMove = e => {
//     const { currentTarget: target } = e;

//     const rect = target.getBoundingClientRect(),
//         x = e.clientX - rect.left,
//         y = e.clientY - rect.top;

//     target.style.setProperty("--mouse-x", Math.floor(x).toString().concat("px"));
//     target.style.setProperty("--mouse-y", Math.floor(y).toString().concat("px"));
// }

// for(const card of document.querySelectorAll(".animationCard")) {
//     console.log(card);
//     card.onmousemove = e => handleOnMouseMove(e);
// }

// function reveal(element) {
//     var reveals = document.querySelectorAll(element);
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
var isExpanded = false;
const myNav = document.getElementById('navbar')
const navEx = document.getElementById('navLinksEx')

window.onscroll = function() {
  navEx.classList.remove('expanded');
  navEx.classList.remove("change");
  isExpanded = false;
  if(window.scrollY > window.innerHeight){
    myNav.classList.add('scrolled')
    // myNav.classList.remove('hidden');
    // delay(501).then(() => myNav.classList.add('scrolled'));
  }else{
    myNav.classList.remove('scrolled');
    // delay(501).then(() => myNav.classList.add('hidden'));
  }
}

function expandNav() {
  if (!isExpanded) {
    navEx.classList.add('expanded');
    navEx.classList.add("change");
  } else {
    navEx.classList.remove('expanded');
    navEx.classList.remove("change");
  }
  isExpanded = !isExpanded;
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
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
const myNav = document.getElementById('navbar');
const navEx = document.getElementById('navLinksEx');
const shrinkBox = document.getElementById('shrinkingBox');

window.onscroll = function() {
  navEx.classList.remove('expanded');
  navEx.classList.remove("change");
  var percent = 100 - (window.scrollY - window.innerHeight);
  // if (percent > 90 && percent < 100) {
  //   shrinkBox.style.width = 100 - (window.scrollY - window.innerHeight) + '%';
  //   shrinkBox.style.borderRadius = '50px';
  // } else if (percent > 100) {
  //   shrinkBox.style.width = '100%';
  //   shrinkBox.style.borderRadius = '0px';
  // } else {
  //   shrinkBox.style.width = '90%';
  //   shrinkBox.style.borderRadius = '50px';
  // }
  isExpanded = false;
  if(window.scrollY > window.innerHeight + 100){
    myNav.classList.add('scrolled');
    console.log(window.scrollY, window.innerHeight);
    shrinkBox.style.width = '90%';
    shrinkBox.style.borderRadius = '50px';
  }else{
    myNav.classList.remove('scrolled');
    shrinkBox.style.width = '100%';
    shrinkBox.style.borderRadius = '0px';
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

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
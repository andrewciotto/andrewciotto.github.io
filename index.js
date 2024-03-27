var isExpanded = false;
const myNav = document.getElementById('navbar');
const navEx = document.getElementById('navLinksEx');
const shrinkBox = document.getElementById('shrinkingBox');

window.onscroll = function() {
  navEx.classList.remove('expanded');
  navEx.classList.remove("change");
  // var percent = 100 - (window.scrollY - window.innerHeight);
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

function toggleFaq(name) {
  plusName = name + "Plus";
  if (document.getElementById(name).classList.contains("toggled")) {
    document.getElementById(name).classList.remove("toggled");
    document.getElementById(name).style.paddingTop = '40px';
    document.getElementById(name).style.transform = 'translateY(-20px)';
    // document.getElementById(name).style.height = 'fit-content';
    document.getElementById(name).style.borderRadius = '0 0 20px 20px';
    document.getElementById(name).style.marginBottom = '50px';
    document.getElementById(plusName).style.transform = 'rotate(45deg)';
  } else {
    document.getElementById(name).classList.add("toggled");
    document.getElementById(name).style.paddingTop = '20px';
    document.getElementById(name).style.transform = 'translateY(-100%)';
    document.getElementById(name).style.height = '72px';
    document.getElementById(name).style.borderRadius = '20px';
    document.getElementById(name).style.marginBottom = '0';
    document.getElementById(plusName).style.transform = 'rotate(0)';
  }
}

window.addEventListener("scroll", reveal);
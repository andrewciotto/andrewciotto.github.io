const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", Math.floor(x).toString().concat("px"));
    target.style.setProperty("--mouse-y", Math.floor(y).toString().concat("px"));
}

for(const card of document.querySelectorAll(".animationCard")) {
    console.log(card);
    card.onmousemove = e => handleOnMouseMove(e);
}

// const button = document.querySelector(".animationCard");

// const readout = document.querySelector("p");

// button.addEventListener("mousemove", (e) => {
//   const { x, y } = button.getBoundingClientRect();

//   readout.innerText = `
//   mouse X: ${e.clientX} mouse Y: ${e.clientY}
  
//   left edge: ${parseInt(x)} top edge: ${parseInt(y)}
  
//   shiny X: ${e.clientX - parseInt(x)} shiny Y: ${e.clientY - parseInt(y)}
//   `;
// });
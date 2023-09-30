// Navigation
// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

// imagePopup.js

function showImage(elemId, imgSrc) {
    console.log("Mouse is over text");
    console.log("\tElemId:" + elemId + " Image Source:" + imgSrc);
    const elem = document.getElementById(elemId);
    const popImage = new Image();
    popImage.src = imgSrc;
    popImage.style.position = "absolute";
    popImage.style.top = "970px";
    popImage.style.zIndex = "2";
    elem.appendChild(popImage);
}
function hideImage(elemId) {
    console.log("Mouse is off text");
    console.log("\tElemId:" + elemId);
    const elem = document.getElementById(elemId);
    while (elem.childElementCount > 0) {
        elem.removeChild(elem.lastChild);
    }
}

function tellToHover() {
    alert("Hover over the button for the image to appear, no need to press it!");
}
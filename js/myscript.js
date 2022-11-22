// Start Slide Landing
const rightBtn = document.getElementById('right-btn')
const leftBtn = document.getElementById('left-btn')
let bullets = document.querySelectorAll(".bullet")
const landingSection = document.getElementById('landing-section')
let backgound = ['url(images/landing02.jpg)', 'url(images/landing.jpg)', 'url(images/landing03.jpg)']

let counter = 1;
function frontChange() {
    if (counter == backgound.length - 1) {
        counter = 0

    }
    else {
        counter++
    }

    landingSection.style.backgroundImage = backgound[counter]
    for (i = 0; i < bullets.length; i++) {
        if (i == counter) {
            bullets[i].style.backgroundColor = '#00c7fc';
        }
        else {
            bullets[i].style.backgroundColor = 'transparent';
        }
    }

}
function backChange() {
    if (counter == 0) {
        counter = backgound.length - 1

    }
    else {
        counter = counter - 1
    }
    landingSection.style.backgroundImage = backgound[counter]

    if (counter == 2) {
        bullets[0].style.backgroundColor = 'transparent';
        bullets[counter].style.backgroundColor = '#00c7fc';
    }
    else {
        bullets[counter + 1].style.backgroundColor = 'transparent';
        bullets[counter].style.backgroundColor = '#00c7fc';
    }

}
setInterval(frontChange, 3000)

rightBtn.onclick = frontChange;
leftBtn.onclick = backChange;

// when click on bullets
bullets[0].addEventListener("click", () => {
    landingSection.style.backgroundImage = backgound[0]
    counter = 0
    for (i = 0; i < bullets.length; i++) {
        if (i == 0) {
            bullets[i].style.backgroundColor = '#00c7fc';
        }
        else {
            bullets[i].style.backgroundColor = 'transparent';
        }
    }

})
bullets[1].addEventListener("click", () => {
    landingSection.style.backgroundImage = backgound[1]
    counter = 1
    for (i = 0; i < bullets.length; i++) {
        if (i == 1) {
            bullets[i].style.backgroundColor = '#00c7fc';
        }
        else {
            bullets[i].style.backgroundColor = 'transparent';
        }
    }

})
bullets[2].addEventListener("click", () => {
    landingSection.style.backgroundImage = backgound[2]
    counter = 2
    for (i = 0; i < bullets.length; i++) {
        if (i == 2) {
            bullets[i].style.backgroundColor = '#00c7fc';
        }
        else {
            bullets[i].style.backgroundColor = 'transparent';
        }
    }

})

// End Slide Landing

// statistic-section
let statsSecion = document.querySelector(".statistic-section")
let nambers = document.querySelectorAll(".statistic-section .number")
let started = false

// skills-section
let skillsSection = document.querySelector(".our-skills")
let progressSpans = document.querySelectorAll(".prog-holder .prog span")


window.onscroll = function () {
    if (scrollY >= statsSecion.offsetTop - 300) {
        if (!started) {
            nambers.forEach((namber) => startCount(namber))
            started = true
        }
    }
    // skills-section

    if (window.scrollY >= skillsSection.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}

function startCount(el) {
    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 500 / goal)
}

// skills-section

if (window.scrollY >= skillsSection.offsetTop - 250) {
    progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
    });
}

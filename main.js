let slides = document.getElementsByClassName("slide")

let immagineAttiva
let immagineSuccessiva
let immaginePrecedente

document.getElementById("successiva").addEventListener("click", function () {

    for (let i = 0; i < slides.length; i++) {

        const slide = slides[i];

        if (slide.classList.contains("active")) {
            slide.classList.remove("active")
            immagineAttiva = i
        }
    }

    immagineSuccessiva = immagineAttiva + 1

    if (immagineSuccessiva >= slides.length) {
        immagineSuccessiva = 0
    }

    slides[immagineSuccessiva].classList.add("active")
});

document.getElementById("precedente").addEventListener("click", function () {

    for (let i = 0; i < slides.length; i--) {

        const slide = slides[i];

        if (slide.classList.contains("active")) {
            slide.classList.remove("active")
            immagineAttiva = i
        }
    }

    immaginePrecedente = immagineAttiva - 1

    if (immaginePrecedente >= slides.length) {
        immaginePrecedente = 0
    }

    slides[immaginePrecedente].classList.add("active")
});
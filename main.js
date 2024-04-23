let slides = document.getElementsByClassName("slide")

let immagineAttiva
let immagineSuccessiva

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
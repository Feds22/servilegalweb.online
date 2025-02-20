document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".team-members");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const totalItems = document.querySelectorAll(".team-member").length;
    const visibleItems = 3; // Cambiar según el diseño

    // Calcular el desplazamiento basado en la cantidad de elementos visibles
    const itemWidth = document.querySelector(".team-member").offsetWidth + 20; // Incluye margen
    const maxIndex = totalItems - visibleItems;

    nextBtn.addEventListener("click", function () {
        if (index < maxIndex) {
            index++;
            slider.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            slider.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });
});

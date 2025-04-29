  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.event__silder__buttons button');
    const track = document.querySelector('.event__silder__track');

    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100; 
        track.style.transform = `translateX(${offset}%)`;

        buttons.forEach((btn, idx) => {
            const img = btn.querySelector('img');
            if (idx === index) {
                img.src = './img/Ellipse 1.svg'; 
            } else {
                img.src = './img/Ellipse 2.svg'; 
            }
        });
    }

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex); 
  });

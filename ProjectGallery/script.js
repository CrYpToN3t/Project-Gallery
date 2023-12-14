const items = document.querySelectorAll('.item');

// Добавление класса при скролле
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    items.forEach(item => {
        const itemPosition = item.offsetTop;

        if (scrollPosition > itemPosition - window.innerHeight / 1.5) {
            item.classList.add('scroll');
        }
    });
});

// Добавление класса при наведении и удаление при уходе мыши
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered');
    });
});
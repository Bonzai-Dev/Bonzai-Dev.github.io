let elementsFadeInMoveUpAnimation = Array.from(document.querySelectorAll(".fadeInMoveUpAnimation"));
//let elementsFadeInAnimation = Array.from(document.querySelectorAll(".fadeInAnimation"));
let elements = [...elementsFadeInMoveUpAnimation];

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            return;
        }
        entry.target.classList.remove("animate");
    });
});

elements.forEach((element) => observer.observe(element));
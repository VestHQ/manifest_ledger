// HIDE 'LEARN MORE' LABEL AFTER SCROLL
const scrollBtn = document.querySelector(".learn-more");
window.addEventListener("scroll", e => {
    const scrollBtnY = window.scrollY + scrollBtn.getBoundingClientRect().bottom
    const scrolled = window.scrollY;

    if (scrolled > scrollBtnY) {
        scrollBtn.style.visibility = 'hidden'
    }
});
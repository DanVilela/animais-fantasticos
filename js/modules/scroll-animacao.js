
const initAnimaScroll = () => {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if (sections.length) {
        const windowHalf = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = (sectionTop - windowHalf) < 0;
                if (sectionVisible)
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo');
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
initAnimaScroll();
export default initAnimaScroll;

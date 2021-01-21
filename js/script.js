const initTabNav = () => {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        let activeTab = (index) => {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direcao);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

const initAccordion = () => {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

const initScrollSuave = () => {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    const scrollToSection = (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //   top: topo,
        //   behavior: 'smooth',
        // });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();


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

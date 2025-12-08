alert("Esta sendo Desenvolvido pelo Dev John-orly!");
document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const faheaderSection = document.querySelector('#faheader');
    const scrollTopButton = document.querySelector('.bodysetacima');

    if (faheaderSection && scrollTopButton) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const faheaderObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    scrollTopButton.style.display = 'none';
                } else {
                    scrollTopButton.style.display = 'block';
                }
            });
        }, observerOptions);

        faheaderObserver.observe(faheaderSection);
    }
});
document.addEventListener('DOMContentLoaded', (event) => {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const faheaderSection = document.querySelector('#faheader');
    const scrollTopButton = document.querySelector('.bodysetacima');

    if (faheaderSection && scrollTopButton) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const faheaderObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    scrollTopButton.style.display = 'none';
                } else {
                    scrollTopButton.style.display = 'block';
                }
            });
        }, observerOptions);

        faheaderObserver.observe(faheaderSection);
    }

    // Código para famain7
    function cleann(event) {
        const inputElement = event.target;

        if (inputElement.value === "Prenche este espaco") {
            inputElement.value = '';
        }

        const alertElement = inputElement.nextElementSibling;
        if (alertElement && alertElement.id === 'ale') {
            alertElement.style.display = 'none';
        }
    }

    const inputs = document.querySelectorAll('#famain7 #barra');
    inputs.forEach(input => {
        input.addEventListener('focus', cleann);
    });

    const submitButton = document.querySelector('#bot');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        let formIsValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '' || input.value === "Prenche este espaco") {
                formIsValid = false;
                const alertElement = input.nextElementSibling;
                if (alertElement && alertElement.id === 'ale') {
                    alertElement.style.display = 'block';
                }
            }
        });

        if (formIsValid) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

});



    document.addEventListener('DOMContentLoaded', function() {
        const verConsolasButton = document.querySelector('[data-consola]');

        verConsolasButton.addEventListener('click', function() {
            const consolasSection = document.querySelector('[data-section-consola]');
            consolasSection.scrollIntoView({ behavior: 'smooth' });
        });
    });


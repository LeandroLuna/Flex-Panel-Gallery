const panels = document.querySelectorAll('.panel'); // Seleciona todos os painéis

panels.forEach((panel) =>
    panel.addEventListener('click', () => {
        panel.classList.toggle('open');
    })
); // Para cada um dos painéis, ao escutar o evento 'click' atribuirá a classe passada como parametro de classList.toggle

panels.forEach((panel) =>
    panel.addEventListener('transitionend', (e) => {
        if (e.propertyName.includes('flex')) {
            panel.classList.toggle('open-active');
        }
    })
); // Se o evento tiver a propriedade 'flex', atribuirá uma nova classe .open-active
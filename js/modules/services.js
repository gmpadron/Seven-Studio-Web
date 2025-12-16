export function initServicesLegacy() {
    // Services Data (Legacy View)
    const servicesData = [
        {
            title: "Servicio Básico",
            desc: "Ideal para emprendedores.<br>Te da el punto de partida esencial con el contenido dirigido que necesitas para que tu público te encuentre y empieces a generar una comunidad sólida para tu marca.",
            price: "$200",
            icon: "fa-paper-plane"
        },
        {
            title: "Estándar Plus",
            desc: "Ideal para negocios con demanda creciente.<br>Enfocado en escalar y manejar tu crecimiento, este plan te ayuda a consolidarte en tu rubro con comunicación constante para llegar a una audiencia más grande de forma eficiente.",
            price: "$300",
            icon: "fa-layer-group"
        },
        {
            title: "Premium",
            desc: "Ideal para dominar el mercado.<br>La estrategia de liderazgo definitiva: integramos la cobertura de tus eventos y aprovechamos las oportunidades de alianzas que surjan para elevar el estatus de tu negocio al máximo nivel.",
            price: "$400",
            icon: "fa-crown"
        }
    ];

    const serviceListEl = document.getElementById('services-list');
    const sTitle = document.getElementById('s-title');
    const sDesc = document.getElementById('s-desc');
    const sPrice = document.getElementById('s-price');
    const sIcon = document.getElementById('s-icon');
    const prevBtn = document.getElementById('prev-service');
    const nextBtn = document.getElementById('next-service');
    let currentServiceIndex = 0;

    if (!serviceListEl) return;

    // Render List
    serviceListEl.innerHTML = '';
    servicesData.forEach((service, index) => {
        const li = document.createElement('li');
        li.className = `service-item ${index === 0 ? 'active' : ''}`;
        li.dataset.index = index;
        li.innerHTML = `
            <span class="service-num">0${index + 1}</span>
            <span class="service-name">${service.title}</span>
        `;
        li.addEventListener('click', () => handleServiceClick(index));
        serviceListEl.appendChild(li);
    });

    function updateServiceCard(index, animationClass) {
        const service = servicesData[index];
        sTitle.innerText = service.title;
        sDesc.innerHTML = service.desc;
        sPrice.innerText = service.price;
        sIcon.className = `fa-solid ${service.icon} icon`;

        document.querySelectorAll('.service-item').forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.dataset.index) === index) item.classList.add('active');
        });

        const cardContent = document.querySelector('.card-content');
        cardContent.className = 'card-content';
        void cardContent.offsetWidth; // Trigger Reflow
        if (animationClass) cardContent.classList.add(animationClass);

        currentServiceIndex = index;
    }

    function handleServiceClick(newIndex) {
        if (newIndex === currentServiceIndex) return;
        let anim = newIndex > currentServiceIndex ? 'animate-slide-down' : 'animate-slide-up';
        updateServiceCard(newIndex, anim);
    }

    // Ensure the first service populates the card on load
    updateServiceCard(0);

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            let newIndex = currentServiceIndex - 1;
            if (newIndex < 0) newIndex = servicesData.length - 1;
            updateServiceCard(newIndex, 'animate-slide-right');
        });

        nextBtn.addEventListener('click', () => {
            let newIndex = currentServiceIndex + 1;
            if (newIndex >= servicesData.length) newIndex = 0;
            updateServiceCard(newIndex, 'animate-slide-left');
        });
    }
}

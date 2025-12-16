export function initCarousels() {
    initIntegrationsCarousel();
}

function initIntegrationsCarousel() {
    // Integrations Data
    const integrations = [
        { name: "Slack", icon: "fa-slack" },
        { name: "Gmail", icon: "fa-google" },
        { name: "HubSpot", icon: "fa-hubspot" },
        { name: "Salesforce", icon: "fa-salesforce" },
        { name: "Notion", icon: "fa-neos" },
        { name: "Shopify", icon: "fa-shopify" },
        { name: "Mailchimp", icon: "fa-envelope" },
        { name: "Discord", icon: "fa-discord" },
        { name: "Trello", icon: "fa-trello" },
        { name: "Twitter", icon: "fa-twitter" },
        { name: "Stripe", icon: "fa-stripe" },
        { name: "Dropbox", icon: "fa-dropbox" },
        { name: "GitHub", icon: "fa-github" },
        { name: "GitLab", icon: "fa-gitlab" },
        { name: "Bitbucket", icon: "fa-bitbucket" },
        { name: "Jira", icon: "fa-jira" },
        { name: "Asana", icon: "fa-asana" },
        { name: "Microsoft", icon: "fa-microsoft" },
        { name: "Apple", icon: "fa-apple" },
        { name: "Android", icon: "fa-android" },
        { name: "Linux", icon: "fa-linux" },
        { name: "AWS", icon: "fa-aws" },
        { name: "Docker", icon: "fa-docker" },
        { name: "Figma", icon: "fa-figma" }
    ];

    const track1 = document.getElementById('swiper-track-1');
    const track2 = document.getElementById('swiper-track-2');

    if (track1 && track2) {
        const tripleIntegrations = [...integrations, ...integrations, ...integrations, ...integrations];
        populateSwiper(track1, tripleIntegrations);
        populateSwiper(track2, [...tripleIntegrations].reverse());

        // Initialize Swiper 1 (Left to Right)
        new Swiper('.swiper-integrations-1', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            speed: 4000,
            allowTouchMove: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
        });

        // Initialize Swiper 2 (Right to Left)
        new Swiper('.swiper-integrations-2', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            speed: 4000,
            allowTouchMove: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
            },
        });
    }
}

function populateSwiper(container, items) {
    container.innerHTML = '';
    items.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="integration-card">
                <i class="fa-brands ${item.icon}"></i>
                <span class="integration-name">${item.name}</span>
            </div>
        `;
        container.appendChild(slide);
    });
}



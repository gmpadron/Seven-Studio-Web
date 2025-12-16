import { initUI } from './modules/ui.js';
import { initAnimations } from './modules/animations.js';
import { initCarousels } from './modules/carousel.js';
import { initServicesLegacy } from './modules/services.js';

document.addEventListener('DOMContentLoaded', () => {
    //console.log("Main JS Loaded");
    initUI();
    initAnimations();
    initCarousels();
    initServicesLegacy();
});

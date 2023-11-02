const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const backgroundToggle = document.querySelector('.mobile-darken-content');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded',true);
        backgroundToggle.setAttribute('data-visible',true);
    } else {
        primaryNav.setAttribute('data-visible',false);
        navToggle.setAttribute('aria-expanded',false);
        backgroundToggle.setAttribute('data-visible',false);

    }
});
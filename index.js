/* RESPONSIVE NAVIGATION DROPDOWN MENU */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})



document.addEventListener('DOMContentLoaded', (event) => { //checks if we are on a mobile device
    const isMobile = window.innerWidth <= 960;

    if (isMobile) { //this section declares the variables
        const prod = document.querySelector('.prod');
        const nextIndicator = document.querySelector('.scroll-indicator.next');
        const prevIndicator = document.querySelector('.scroll-indicator.prev');

        console.log('prod found', prevIndicator)

        if (prod && nextIndicator && prevIndicator) { // this section adds a scroll event listener to the prod div
            prod.addEventListener('scroll', () => {
                const scrollPosition = prod.scrollLeft;

                const isScrolledToEnd = prod.scrollWidth - prod.scrollLeft <= prod.clientWidth + 1;

                if (isScrolledToEnd) {
                    nextIndicator.style.opacity = '0';
                    nextIndicator.style.pointerEvents = 'none'
                } else {
                   nextIndicator.style.opacity = '0.7';
                   nextIndicator.style.pointerEvents = 'auto' 
                }

                if (scrollPosition > 5) { // checks if user has scrolled a certain amount
                    prevIndicator.style.opacity = '0.7';
                    prevIndicator.style.pointerEvents = 'auto'; //this makes the scrollbar icon not clickable
                } else {
                    prevIndicator.style.opacity = '0';
                    prevIndicator.style.pointerEvents = 'none'
                }
            })
        }
    }
})




document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-container')

    if (window.innerWidth <= 960) {
        let scrollInterval;
        let cardWidth;
        let isScrolling = false;


        function scrollNext() {
            const firstCard = reviewsContainer.querySelector('.review-card');
            if (!firstCard) return;

            const cardStyle = window.getComputedStyle(firstCard);
            const cardMargin = parseFloat(cardStyle.marginRight) + parseFloat(cardStyle.marginLeft);
            const cardGap = 20;
            cardWidth = firstCard.offsetWidth + cardMargin + cardGap;


            let nextScrollPosition = reviewsContainer.scrollLeft + cardWidth;

            if (nextScrollPosition >= reviewsContainer.scrollWidth - reviewsContainer.clientWidth) {
                nextScrollPosition = 0;
            }

            reviewsContainer.scrollTo({
                left: nextScrollPosition,
                behavior: 'smooth'
            });
        }

        function startAutoScroll() {
            scrollInterval = setInterval(() => {
                scrollNext();
            }, 4000);
        }

        function stopAutoScroll() {
            clearInterval(scrollInterval);
        }
        let timeOutId;
        reviewsContainer.addEventListener('scroll', () => {
            if (!isScrolling) {
                stopAutoScroll();
                isScrolling = true;
            }
            clearTimeout(timeOutId);
            timeOutId = setTimeout(() => {
                isScrolling = false;
                startAutoScroll();
            }, 3000);
        });
        startAutoScroll();
    }
});




/** FORM SECTION */
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    alert("Message sent! Thanks for reaching out!");

    this.reset();
});
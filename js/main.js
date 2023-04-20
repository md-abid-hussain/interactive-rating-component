document.addEventListener('readystatechange', (event) => {
    if (document.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    const firstPage = document.querySelector('.first-page');
    const secondPage = document.querySelector('.second-page');
    const ratingSection = firstPage.querySelector('section');
    const finalRating = document.getElementById("final-rating");
    const submitEl = document.querySelector('.first-page>button');

    let isSelected = false;

    let rate = undefined;
    ratingSection.addEventListener('click', (event) => {
        if (event.target !== ratingSection) {
            isSelected = true;
            rate = event.target.textContent;
        }
    })

    submitEl.addEventListener('click', (event) => {
        if (isSelected) {
            finalRating.textContent = rate;
            secondPage.style.display = 'flex';
            firstPage.style.display = 'none';
        } else {
            alert('Please select rating');
        }
    })
};
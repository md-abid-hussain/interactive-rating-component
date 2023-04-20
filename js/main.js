document.addEventListener('readystatechange', (event) => {
    if (document.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    const firstPage = document.querySelector('.first-page');
    const secondPage = document.querySelector('.second-page');
    const ratingSection = firstPage.querySelector('div');
    const finalRating = document.getElementById("final-rating");
    const submitEl = document.querySelector('.first-page>button');

    let isSelected = false;

    let rate = undefined;
    ratingSection.addEventListener('click', (event) => {
        const selectedEl = event.target;
        if (selectedEl !== ratingSection) {
            isSelected = true;
            selectedEl.classList.add('selected');
            rate = selectedEl.textContent;
        }

        const ratingSectionEl = ratingSection.children;
        for (let index = 0; index < ratingSectionEl.length; index++) {
            const el = ratingSectionEl[index];
            if (el !== selectedEl && el.classList.contains('selected'))
                el.classList.remove('selected');
        }
    })

    submitEl.addEventListener('click', (event) => {
        if (isSelected) {
            finalRating.textContent = rate;
            secondPage.style.display = 'flex';
            secondPage.animate([
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                },
            ],
                1000);
            firstPage.style.display = 'none';
        } else {
            alert('Please select rating');
        }
    })
};
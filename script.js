window.addEventListener('load', () => {
    const catImage = document.querySelector('.image-container img');
    
    // Apply scaling effect on page load
    catImage.style.transform = 'scale(2.8)';
    catImage.style.transition = 'transform 1s ease';

    // Revert to normal size after 1 second
    setTimeout(() => {
        catImage.style.transform = '';
    }, 1000);
});

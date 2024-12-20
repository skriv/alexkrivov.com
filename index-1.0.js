// ... existing code ...

function changeSelectionColor() {
    const colors = [
        'var(--container--pallete--yellow)', 
        'var(--container--pallete--avocado)', 
        'var(--container--pallete--kiwi)', 
        'var(--container--pallete--blue)', 
        'var(--container--pallete--lilac)', 
        'var(--container--pallete--red)'
    ];

    const style = document.createElement('style');
    document.head.appendChild(style);

    let currentColor = null;

    document.addEventListener('mousedown', () => {
        setTimeout(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            currentColor = randomColor;
            style.innerHTML = `::selection { background: ${currentColor}; color: black; }`;
            console.log(`Selection color changed to: ${currentColor}`);
        }, 20);
    });
}

document.addEventListener('DOMContentLoaded', changeSelectionColor);

// ... existing code ...
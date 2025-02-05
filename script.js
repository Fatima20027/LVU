// Function to handle button click events
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const gif = document.getElementById('gif');
const gifContainer = document.querySelector('.tenor-gif-embed');
const text = document.getElementById('text');
const smallText = document.getElementById('smalltext');

yesBtn.addEventListener('click', function() {
    flashRainbowColors(function() {
        document.getElementById('question').style.display = 'none';     
    });

    text.innerText = 'I love you too!💗';
    smallText.innerText = 'YAAY I kneeeeew it!!';
    gif.src = 'cat-heart.gif';
    


});

noBtn.addEventListener('mouseover', function() {
    const noBtnRec = noBtn.getBoundingClientRect();

    // Get viewport dimensions
    const maxI = window.innerWidth - noBtnRec.width;
    const maxJ = window.innerHeight - noBtnRec.height;

    // Ensure the button stays within the viewport
    const i = Math.min(maxI, Math.max(0, Math.random() * maxI));
    const j = Math.min(maxJ, Math.max(0, Math.random() * maxJ));

    noBtn.style.left = `${i}px`;
    noBtn.style.top = `${j}px`;
});


function flashRainbowColors(callback) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let i = 0;
    const interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);

    
}

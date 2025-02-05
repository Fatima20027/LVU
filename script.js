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
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;

    noBtn.style.left = i + `px`;
    noBtn.style.top = j + `px`;
    
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

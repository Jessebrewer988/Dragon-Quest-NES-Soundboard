// soundboard logic

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if not a transform
    this.classList.remove('playing');
};

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // no key = no play!
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing');
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys[0].addEventListener('click', playSound);
window.addEventListener('keydown', playSound);
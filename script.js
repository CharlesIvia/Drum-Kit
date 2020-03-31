function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not a tranform event
    this.classList.remove('playing');

};
    
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the fn from running
        
    audio.currentTime = 0; //rewinds the keys
    audio.play();
    key.classList.add('playing');
};
    
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
function positionElements() {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    box1.style.left = (winWidth * 0.1) + 'px';
    box1.style.top = (winHeight * 0.2) + 'px';
    box2.style.left = (winWidth * 0.5 - box2.offsetWidth / 2) + 'px';
    box2.style.top = (winHeight * 0.5 - box2.offsetHeight / 2) + 'px';
}
positionElements();
window.addEventListener('resize', positionElements);

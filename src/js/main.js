function splitIntoChunks(text, width = 40, maxLineLength = 80) {
    if (!text) return '';
    const lines = text.split('\n');
    for (const line of lines) {
        if (line.length > maxLineLength) {
            throw new Error(`Input line exceeds ${maxLineLength} characters: "${line}"`);
        }
    }
    const result = lines.map(line => {
        if (line.length === 0) return '';
        const regex = new RegExp(`.{1,${width}}`, 'g');
        const chunks = line.match(regex) || [line];
        return chunks.join('\n');
    });
    return result.join('\n');
}

function positionElements() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const flooredWidth = Math.floor(width / 10) * 10;
    let charWidth,
        charHeight;
    if (width > 650) {
        charWidth = width / 80;
        charHeight = charWidth / .56;
    } else {
        const input = document.getElementById('box1').textContent.trim();
        const output = splitIntoChunks(input);
        document.getElementById('box1').textContent = output
        charWidth = width / 40;
        charHeight = charWidth / .56;
    }
    box1.style.fontSize = charHeight + 'px';
    box1.style.left = 0;
    box1.style.top = 0;
    box1.style.color = 'red';
    box1.style.overflowWrap = 'break-word';
}
console.log(JSON.stringify(`testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest \
# this is the best
# this is the best
# this is the best
# this is the best`));

positionElements();
window.addEventListener('resize', positionElements);

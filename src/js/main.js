// function splitIntoChunks(text, width = 40, maxLineLength = 80) {
    // if (!text) return '';
    // const lines = text.split('\n');
    // for (const line of lines) {
        // if (line.length > maxLineLength) {
            // throw new Error(`Input line exceeds ${maxLineLength} characters: "${line}"`);
        // }
    // }
    // const result = lines.map(line => {
        // if (line.length === 0) return '';
        // const regex = new RegExp(`.{1,${width}}`, 'g');
        // const chunks = line.match(regex) || [line];
        // return chunks.join('\n');
    // });
    // return result.join('\n');
// }


function splitForSmallScreen(text, maxLength) {
    let result = '';
    for (let i = 0; i < text.length; i += maxLength) {
        result += text.slice(i, i + maxLength) + '\n';
    }
    return result.trim();
}

function adjustRatioOnScreenWidth(x) {
    if (x > 450) {
        const maxRatio = 0.57;
        const minRatio = 0.54;
        const maxX = 800;
        const xRatio = Math.min(x / maxX, 1);
        const eased = 1 - Math.pow(1 - xRatio, 2);
        return eased * (maxRatio - minRatio) + maxRatio;
    } else {
        const maxRatio = 0.58;
        const minRatio = 0.55;
        const maxX = 450;
        const xRatio = Math.min(x / maxX, 1);
        const eased = 1 - Math.pow(1 - xRatio, 2);
        return eased * (maxRatio - minRatio) + maxRatio;
    }
}

function positionElements() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const flooredWidth = Math.floor(width / 10) * 10;
    let charWidth,
        charHeight;
    // width less than 450 needs 40 char fix
    // if (width > 1) {
    if (width > 450) {
        charWidth = width / 80;
    } else {
        charWidth = width / 40;
        const text = box2.textContent;
        const formattedText = splitForSmallScreen(text, 40);
        box2.innerHTML = formattedText.replace(/\n/g, '<br>');
    }

    charHeight = charWidth / adjustRatioOnScreenWidth(width);
    // } else {
        // const input = document.getElementById('box1').textContent.trim();
        // const output = splitIntoChunks(input);
        // document.getElementById('box1').textContent = output
        // charWidth = width / 40;
        // charHeight = charWidth / .6;
    // }
    box1.style.fontSize = charHeight + 'px';
    // const fontSize = charHeight + 'px';
    
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
document.addEventListener('DOMContentLoaded', positionElements);

let div = null;

window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn')
    const output = document.getElementById('output')
    const copyBtn = document.getElementById('copy-btn')
    const output2 = document.getElementById('output2')
    const copyBtn2 = document.getElementById('copy-btn2')

    btn.addEventListener('click', function() {
        const colorCode = generateColorDecimal()
        const hex = generateHexColor(colorCode);
        const rgb = generateRGBColor(colorCode);
        root.style.backgroundColor = hex;
        output.value = hex.substring(1);
        output2.value = rgb;

    });

    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(`#${output.value}`);
        if (div !== null) {
            div.remove();
            div = null;
        }
        if (isValidHex(output.value)) {

            generateToastMessage(`#${output.value} copied`);
        } else {
            alert('Invalid Color Code')
        }
    })

    copyBtn2.addEventListener('click', function() {
        navigator.clipboard.writeText(`#${output2.value}`);
        if (div !== null) {
            div.remove();
            div = null;
        }
        if (isValidHex(output.value)) {

            generateToastMessage(`#${output2.value} copied`);
        } else {
            alert('Invalid Color Code')
        }
    })



    output.addEventListener('keyup', function(e) {
        const colorCode = e.target.value;
        if (colorCode) {
            output.value = colorCode.toUpperCase();
            if (isValidHex(colorCode)) {
                root.style.backgroundColor = `#${colorCode}`;
                output2.value = hexToRgb(colorCode)
            }
        }
    })
}


function generateColorDecimal() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return {
        red,
        green,
        blue
    }
}

function generateHexColor({ red, green, blue }) {

    const getTowCode = (value) => {
        const hex = value.toString(16);
        return hex.length == 1 ? `0${hex}` : hex
    }


    return `#${getTowCode(red) }${getTowCode(green)}${getTowCode(blue)}`.toUpperCase();
}

function generateRGBColor({ red, green, blue }) {
    return `rgb(${red},${green},${blue})`;
}

function hexToRgb(hex) {
    const red = parseInt(hex.slice(0, 2), 16)
    const green = parseInt(hex.slice(2, 4), 16)
    const blue = parseInt(hex.slice(4), 16)

    return `rgb(${red},${green},${blue})`
}



function generateToastMessage(e) {
    div = document.createElement('div')
    div.innerText = e;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function() {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function() {
            div.remove();
            div = null;
        });
    })

    document.body.appendChild(div)
}


/**
 * @param {string} color : ;
 */
function isValidHex(colorCode) {
    if (colorCode.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(colorCode);
}
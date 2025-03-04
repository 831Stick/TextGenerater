function generateFormattedText(input, options) {
    let formattedText = input;

    if (options.size) {
        formattedText = `<size=${options.size}>${formattedText}</size>`;
    }
    if (options.colorCode) {
        formattedText = `<color=${options.colorCode}>${formattedText}</color>`;
    } else if (options.color) {
        formattedText = `<color=${options.color}>${formattedText}</color>`;
    } else if (!options.size && /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF]/.test(input)) {
        // 日本語の単色でサイズ指定がない場合
        formattedText = `<color=#000000>${formattedText}</color>`;
    }
    if (options.bold) {
        formattedText = `<b>${formattedText}</b>`;
    }
    if (options.italic) {
        formattedText = `<i>${formattedText}</i>`;
    }

    return formattedText;
}

function generateColorfulTextContent(input, options) {
    const colors = [
        "#ff8484", // Pastel Red
        "#ff84c1", // Pastel Pink
        "#FF7FF9", // Pastel Magenta
        "#BF7FF7", // Pastel Purple
        "#7FBFF9", // Pastel blue
        "#7FFFF9", // Pastel sky blue
        "#7FFFC7", // Pastel green
        "#7FFF78", // Pastel weed
        "#BFFF81", // Pastel light green
        "#FFFF88", // Pastel Yellow
        "#FFBF88", // Pastel Orange
    ];
    let colorfulText = options.italic ? "<i>" : "";
    if (options.bold) {
        colorfulText += "<b>";
    }

    for (let i = 0; i < input.length; i++) {
        const color = options.colorCode || colors[i % colors.length];
        const char = input[i];
        let charText = `<color=${color}>${char}</color>`;
        if (options.size) {
            charText = `<color=${color}><size=${options.size}>${char}</size></color>`;
        }
        colorfulText += charText;
    }

    if (options.bold) {
        colorfulText += "</b>";
    }
    if (options.italic) {
        colorfulText += "</i>";
    }
    return colorfulText;
}

function generateText() {
    const userInput = document.getElementById('userInput').value;
    const fontSizeInput = document.getElementById('fontSizeInput').value;
    const specialHtmlOutput = document.getElementById('specialHtmlOutput');

    const options = {
        bold: document.getElementById('bold').checked,
        italic: document.getElementById('italic').checked,
        size: fontSizeInput || null,
        color: document.getElementById('color').value || null,
        colorCode: document.getElementById('colorCodeInput').value || null
    };

    let formattedText = generateFormattedText(userInput, options);

    // Clear previous output
    specialHtmlOutput.textContent = '';

    // Display the special HTML code
    specialHtmlOutput.textContent = formattedText;
}

function generateColorfulText() {
    const userInput = document.getElementById('userInput').value;
    const specialHtmlOutput = document.getElementById('specialHtmlOutput');

    const options = {
        bold: document.getElementById('bold').checked,
        italic: document.getElementById('italic').checked,
        size: document.getElementById('fontSizeInput').value || null,
        colorCode: document.getElementById('colorCodeInput').value || null
    };

    const colorfulText = generateColorfulTextContent(userInput, options);

    // Clear previous output
    specialHtmlOutput.textContent = '';

    // Display the special HTML code
    specialHtmlOutput.textContent = colorfulText;
}

function copyToClipboard() {
    const specialHtmlOutput = document.getElementById('specialHtmlOutput');
    const text = specialHtmlOutput.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

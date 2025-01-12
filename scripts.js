function generateFormattedText(input, options) {
    let formattedText = input;

    if (options.size) {
        formattedText = `<ųũźť=${options.size}>${formattedText}</ųũźť>`;
    }
    if (options.color) {
        formattedText = `<ͣolor=${options.color}>${formattedText}</ͣolor>`;
    } else if (!options.size && /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF]/.test(input)) {
        // 日本語の単色でサイズ指定がない場合
        formattedText = `<ͣolor=#ff9966>${formattedText}</ͣolor>`;
    }
    if (options.bold) {
        formattedText = `<b>${formattedText}</b>`;
    }
    if (options.italic) {
        formattedText = `<ͩ>${formattedText}</ͩ>`;
    }
    if (options.blueText) {
        formattedText = `<͡>${formattedText}</͡>`;
    }

    return formattedText;
}

function generateColorfulTextContent(input, options) {
    const colors = [
        "#fac0c0", // Pastel Red
        "#fac0e7", // Pastel Pink
        "#eac0fa", // Pastel Magenta
        "#c0c4fa", // Pastel Blue
        "#c0e8fa", // Pastel sky blue
        "#c0faea", // Pastel light green
        "#c0fac5", // Pastel green
        "#dffac0", // Pastel weed
        "#faf4c0", // Pastel yellow
        "#fae0c0", // Pastel orange
        "#fac0c0", // Pastel red
    ];
    let colorfulText = options.italic ? "<ͩ>" : "";
    if (options.bold) {
        colorfulText += "<b>";
    }

    for (let i = 0; i < input.length; i++) {
        const color = colors[i % colors.length];
        const char = input[i];
        let charText = `<ͣolor=${color}>${char}</ͣolor>`;
        if (options.size) {
            charText = `<ͣolor=${color}><ųũźť=${options.size}>${char}</ųũźť></ͣolor>`;
        }
        colorfulText += charText;
    }

    if (options.bold) {
        colorfulText += "</b>";
    }
    if (options.italic) {
        colorfulText += " </ͩ>";
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
        blueText: document.getElementById('blueText').checked
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
        size: document.getElementById('fontSizeInput').value || null
    };

    const colorfulText = generateColorfulTextContent(userInput, options);

    // Clear previous output
    specialHtmlOutput.textContent = '';

    // Display the special HTML code
    specialHtmlOutput.textContent = colorfulText;
}

function generateFormattedText(input, options) {
    let formattedText = input;
    let htmlOutputText = input;

    if (options.colorCode) {
        formattedText = `<cůlor=${options.colorCode}>${formattedText}</cůlor>`;
        htmlOutputText = `<font style="color:${options.colorCode};">${htmlOutputText}</font>`;
    } else if (options.color) {
        formattedText = `<cůlor=${options.color}>${formattedText}</cůlor>`;
        htmlOutputText = `<font style="color:${options.color};">${htmlOutputText}</font>`;
    } else if (!options.size && /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF]/.test(input)) {
        // 日本語の単色でサイズ指定がない場合
        formattedText = `<cůlor=#000000>${formattedText}</cůlor>`;
        htmlOutputText = `<font style="color:#000000;">${htmlOutputText}</font>`;
    }
    if (options.bold) {
        formattedText = `<b>${formattedText}</b>`;
        htmlOutputText = `<b>${htmlOutputText}</b>`;
    }
    if (options.size) {
        formattedText = `<siŚe=${options.size}>${formattedText}</siŚe>`;
        htmlOutputText = `<span style="font-size:${options.size}px;">${htmlOutputText}</span>`;
    }
    if (options.italic) {
        formattedText = `<ͩ>${formattedText}</ͩ>`;
        htmlOutputText = `<i>${htmlOutputText}</i>`;
    }

    return { formattedText, htmlOutputText };
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
    let colorfulText = options.italic ? "<ͩ>" : "";
    let htmlOutputText = options.italic ? "<i>" : "";
    if (options.bold) {
        colorfulText += "<b>";
        htmlOutputText += "<b>";
    }
    if (options.size) {
        colorfulText += `<siŚe=${options.size}>`;
        htmlOutputText += `<span style="font-size:${options.size}px;">`;
    }

    for (let i = 0; i < input.length; i++) {
        const color = colors[i % colors.length];
        const char = input[i];
        let charText = `<cůlor=${color}>${char}</cůlor>`;
        let htmlCharText = `<font style="color:${color};">${char}</font>`;
        colorfulText += charText;
        htmlOutputText += htmlCharText;
    }

    if (options.size) {
        colorfulText += `</siŚe>`;
        htmlOutputText += `</span>`;
    }
    if (options.bold) {
        colorfulText += "</b>";
        htmlOutputText += "</b>";
    }
    if (options.italic) {
        colorfulText += "</ͩ>";
        htmlOutputText += "</i>";
    }
    return { colorfulText, htmlOutputText };
}

function generateText() {
    const userInput = document.getElementById('userInput').value;
    const fontSizeInput = document.getElementById('fontSizeInput').value;
    const specialHtmlOutput = document.getElementById('specialHtmlOutput');
    const htmlOutputColored = document.getElementById('HtmlOutputColored');
    const htmlOutputWhite = document.getElementById('HtmlOutputWhite');

    const options = {
        bold: document.getElementById('bold').checked,
        italic: document.getElementById('italic').checked,
        size: fontSizeInput || null,
        color: document.getElementById('color').value || null,
        colorCode: document.getElementById('colorCodeInput').value || null
    };

    const { formattedText, htmlOutputText } = generateFormattedText(userInput, options);

    // Clear previous output
    specialHtmlOutput.textContent = '';
    htmlOutputColored.textContent = '';
    htmlOutputWhite.textContent = '';

    // Display the special HTML code
    specialHtmlOutput.textContent = formattedText;
    htmlOutputColored.innerHTML = htmlOutputText;
    htmlOutputWhite.innerHTML = htmlOutputText;
}

function generateColorfulText() {
    const userInput = document.getElementById('userInput').value;
    const specialHtmlOutput = document.getElementById('specialHtmlOutput');
    const htmlOutputColored = document.getElementById('HtmlOutputColored');
    const htmlOutputWhite = document.getElementById('HtmlOutputWhite');

    const options = {
        bold: document.getElementById('bold').checked,
        italic: document.getElementById('italic').checked,
        size: document.getElementById('fontSizeInput').value || null,
        colorCode: document.getElementById('colorCodeInput').value || null
    };

    const { colorfulText, htmlOutputText } = generateColorfulTextContent(userInput, options);

    // Clear previous output
    specialHtmlOutput.textContent = '';
    htmlOutputColored.textContent = '';
    htmlOutputWhite.textContent = '';

    // Display the special HTML code
    specialHtmlOutput.textContent = colorfulText;
    htmlOutputColored.innerHTML = htmlOutputText;
    htmlOutputWhite.innerHTML = htmlOutputText;
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

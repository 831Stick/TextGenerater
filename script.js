function generateFormattedText(input, options) {
    let formattedText = input;
    let htmlOutputText = input;

    if (options.colorCode) {
        formattedText = `<color=${options.colorCode}>${formattedText}</š>`;
        htmlOutputText = `<font style="color:${options.colorCode};">${htmlOutputText}</font>`;
    } else if (options.color) {
        formattedText = `<color=${options.color}>${formattedText}</š>`;
        htmlOutputText = `<font style="color:${options.color};">${htmlOutputText}</font>`;
    } else if (!options.size && /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF]/.test(input)) {
        // 日本語の単色でサイズ指定がない場合
        formattedText = `<color=#000000>${formattedText}</š>`;
        htmlOutputText = `<font style="color:#000000;">${htmlOutputText}</font>`;
    }
    if (options.bold) {
        formattedText = `<b>${formattedText}</b>`;
        htmlOutputText = `<b>${htmlOutputText}</b>`;
    }
    if (options.italic) {
        formattedText = `<ͩ>${formattedText}</ͩ>`;
        htmlOutputText = `<i>${htmlOutputText}</i>`;
    }

    return { formattedText, htmlOutputText };
}

function generateColorfulTextContent(input, options) {
    const colors = [
        "#ff5b5b", // Red
        "#ff5bad", // Pink
        "#f95cf9", // Magenta
        "#ab5bfb", // Purple
        "#6161fd", // blue
        "#5babfc", // royal Purple
        "#5afafa", // light blue
        "#5bffad", // light green one
        "#5bff5b", // green
        "#adff5b", // weed
        "#ffff5b", // Yellow
        "#ffad5b", // Orange
    ];
    let colorfulText = options.italic ? "<ͩ>" : "";
    let htmlOutputText = options.italic ? "<i>" : "";
    if (options.bold) {
        colorfulText += "<b>";
        htmlOutputText += "<b>";
    }

    for (let i = 0; i < input.length; i++) {
        const color = colors[i % colors.length];
        const char = input[i];
        let charText = `<color=${color}>${char}</š>`;
        let htmlCharText = `<font style="color:${color};">${char}</font>`;
        colorfulText += charText;
        htmlOutputText += htmlCharText;
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
    const specialHtmlOutput = document.getElementById('specialHtmlOutput');
    const htmlOutputColored = document.getElementById('HtmlOutputColored');
    const htmlOutputWhite = document.getElementById('HtmlOutputWhite');
    const htmlOutputYellow = document.getElementById('HtmlOutputYellow');

    const options = {
        bold: document.getElementById('bold').checked,
        italic: document.getElementById('italic').checked,
        color: document.getElementById('color').value || null,
        colorCode: document.getElementById('colorCodeInput').value || null
    };

    const { formattedText, htmlOutputText } = generateFormattedText(userInput, options);

    // Clear previous output
    specialHtmlOutput.textContent = '';
    htmlOutputColored.textContent = '';
    htmlOutputWhite.textContent = '';
    htmlOutputYellow.textContent = '';

    // Display the special HTML code
    specialHtmlOutput.textContent = formattedText;
    htmlOutputColored.innerHTML = htmlOutputText;
    htmlOutputWhite.innerHTML = htmlOutputText;
    htmlOutputYellow.innerHTML = htmlOutputText;
}

function generateColorfulText() {
    const userInput = document.getElementById('userInput').value;
    const specialHtmlOutput = document.getElementById('specialHtmlOutput');
    const htmlOutputColored = document.getElementById('HtmlOutputColored');
    const htmlOutputWhite = document.getElementById('HtmlOutputWhite');
    const htmlOutputYellow = document.getElementById('HtmlOutputYellow');

    const options = {
        bold: document.getElementById('bold').checked,
        italic: document.getElementById('italic').checked,
        colorCode: document.getElementById('colorCodeInput').value || null
    };

    const { colorfulText, htmlOutputText } = generateColorfulTextContent(userInput, options);

    // Clear previous output
    specialHtmlOutput.textContent = '';
    htmlOutputColored.textContent = '';
    htmlOutputWhite.textContent = '';
    htmlOutputYellow.textContent = '';

    // Display the special HTML code
    specialHtmlOutput.textContent = colorfulText;
    htmlOutputColored.innerHTML = htmlOutputText;
    htmlOutputWhite.innerHTML = htmlOutputText;
    htmlOutputYellow.innerHTML = htmlOutputText;
}

function generateAnounceTextContent(input, options) {
    const colors = [
        "#ff5b5b", // Red
        "#ff5bad", // Pink
        "#f95cf9", // Magenta
        "#ab5bfb", // Purple
        "#6161fd", // blue
        "#5babfc", // royal Purple
        "#5afafa", // light blue
        "#5bffad", // light green one
        "#5bff5b", // green
        "#adff5b", // weed
        "#ffad5b", // Orange
    ];
    let anounceText = options.italic ? "<ͩ>" : "";
    let htmlOutputText = options.italic ? "<i>" : "";
    if (options.bold) {
        anounceText += "<b>";
        htmlOutputText += "<b>";
    }

    for (let i = 0; i < input.length; i++) {
        const color = colors[i % colors.length];
        const char = input[i];
        let charText = `<color=${color}>${char}</š>`;
        let htmlCharText = `<font style="color:${color};">${char}</font>`;
        anounceText += charText;
        htmlOutputText += htmlCharText;
    }

    if (options.bold) {
        anounceText += "</b>";
        htmlOutputText += "</b>";
    }
    if (options.italic) {
        anounceText += "</ͩ>";
        htmlOutputText += "</i>";
    }
    return { anounceText, htmlOutputText };
}

function geneAnounceText() {
    const userInput = document.getElementById('userInput').value;
    const specialHtmlOutput = document.getElementById('specialHtmlOutput');
    const htmlOutputColored = document.getElementById('HtmlOutputColored');
    const htmlOutputWhite = document.getElementById('HtmlOutputWhite');
    const htmlOutputYellow = document.getElementById('HtmlOutputYellow');

    const options = {
        bold: document.getElementById('bold').checked,
        italic: document.getElementById('italic').checked,
        colorCode: document.getElementById('colorCodeInput').value || null
    };

    const { anounceText, htmlOutputText } = generateAnounceTextContent(userInput, options);

    // Clear previous output
    specialHtmlOutput.textContent = '';
    htmlOutputColored.textContent = '';
    htmlOutputWhite.textContent = '';
    htmlOutputYellow.textContent = '';

    // Display the special HTML code
    specialHtmlOutput.textContent = anounceText;
    htmlOutputColored.innerHTML = htmlOutputText;
    htmlOutputWhite.innerHTML = htmlOutputText;
    htmlOutputYellow.innerHTML = htmlOutputText;
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
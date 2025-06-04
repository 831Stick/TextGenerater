function generateFormattedText(input, options) {
    let formattedText = options.italic ? "<ũ>" : "";
    let htmlOutputText = options.italic ? "<i>" : "";

    if (options.bold) {
        formattedText += "<ł>";
        htmlOutputText += "<b>";
    }

    if (options.size) {
        formattedText += `<ၳၩၺၥ=${options.size}>`;
    }

    formattedText += `<ͣolor=${options.colorCode || options.color || "#000000"}>${input}</ͣolor>`;
    htmlOutputText += `<span style="color:${options.colorCode || options.color || "#000000"}; font-size:${options.size || "inherit"};">${input}</span>`;

    if (options.size) {
        formattedText += `</ၳၩၺၥ>`;
    }

    if (options.bold) {
        formattedText += "</ł>";
        htmlOutputText += "</b>";
    }
    if (options.italic) {
        formattedText += "</ũ>";
        htmlOutputText += "</i>";
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
    let colorfulText = options.italic ? "<ũ>" : "";
    let htmlOutputText = options.italic ? "<i>" : "";

    if (options.bold) {
        colorfulText += "<ł>";
        htmlOutputText += "<b>";
    }

    if (options.size) {
        colorfulText += `<ၳၩၺၥ=${options.size}>`;
    }

    for (let i = 0; i < input.length; i++) {
        const color = colors[i % colors.length];
        const char = input[i];
        colorfulText += `<ͣolor=${color}>${char}</ͣolor>`;
        htmlOutputText += `<span style="color:${color}; font-size:${options.size || "inherit"};">${char}</span>`;
    }

    if (options.size) {
        colorfulText += `</ၳၩၺၥ>`;
    }

    if (options.bold) {
        colorfulText += "</ł>";
        htmlOutputText += "</b>";
    }
    if (options.italic) {
        colorfulText += "</ũ>";
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
        colorCode: document.getElementById('colorCodeInput').value || null,
        size: document.getElementById('sizeInput').value || null
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
        colorCode: document.getElementById('colorCodeInput').value || null,
        size: document.getElementById('sizeInput').value || null
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
    let anounceText = options.italic ? "<ũ>" : "";
    let htmlOutputText = options.italic ? "<i>" : "";

    if (options.bold) {
        anounceText += "<ł>";
        htmlOutputText += "<b>";
    }

    if (options.size) {
        anounceText += `<ၳၩၺၥ=${options.size}>`;
    }

    for (let i = 0; i < input.length; i++) {
        const color = colors[i % colors.length];
        const char = input[i];
        anounceText += `<ͣolor=${color}>${char}</ͣolor>`;
        htmlOutputText += `<span style="color:${color}; font-size:${options.size || "inherit"};">${char}</span>`;
    }

    if (options.size) {
        anounceText += `</ၳၩၺၥ>`;
    }

    if (options.bold) {
        anounceText += "</ł>";
        htmlOutputText += "</b>";
    }
    if (options.italic) {
        anounceText += "</ũ>";
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
        colorCode: document.getElementById('colorCodeInput').value || null,
        size: document.getElementById('sizeInput').value || null
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

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.value || element.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

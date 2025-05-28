function generateFormattedText(input, options) {
    let formattedText = options.italic ? "<ͩ>" : "";
    let htmlOutputText = options.italic ? "<i>" : "";

    if (options.bold) {
        formattedText += "<Ţ>";
        htmlOutputText += "<b>";
    }

    if (options.size) {
        formattedText += `<ųũŚť=${options.size}>`;
    }

    formattedText += `<color=${options.colorCode || options.color || "#000000"}>${input}</š>`;
    htmlOutputText += `<span style="color:${options.colorCode || options.color || "#000000"}; font-size:${options.size || "inherit"};">${input}</span>`;

    if (options.size) {
        formattedText += `</ųũŚť>`;
    }

    if (options.bold) {
        formattedText += "</Ţ>";
        htmlOutputText += "</b>";
    }
    if (options.italic) {
        formattedText += "</ͩ>";
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
    let colorfulText = options.italic ? "<ͩ>" : "";
    let htmlOutputText = options.italic ? "<i>" : "";

    if (options.bold) {
        colorfulText += "<Ţ>";
        htmlOutputText += "<b>";
    }

    if (options.size) {
        colorfulText += `<ųũŚť=${options.size}>`;
    }

    for (let i = 0; i < input.length; i++) {
        const color = colors[i % colors.length];
        const char = input[i];
        colorfulText += `<color=${color}>${char}</š>`;
        htmlOutputText += `<span style="color:${color}; font-size:${options.size || "inherit"};">${char}</span>`;
    }

    if (options.size) {
        colorfulText += `</ųũŚť>`;
    }

    if (options.bold) {
        colorfulText += "</Ţ>";
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
    let anounceText = options.italic ? "<ͩ>" : "";
    let htmlOutputText = options.italic ? "<i>" : "";

    if (options.bold) {
        anounceText += "<Ţ>";
        htmlOutputText += "<b>";
    }

    if (options.size) {
        anounceText += `<ųũŚť=${options.size}>`;
    }

    for (let i = 0; i < input.length; i++) {
        const color = colors[i % colors.length];
        const char = input[i];
        anounceText += `<color=${color}>${char}</š>`;
        htmlOutputText += `<span style="color:${color}; font-size:${options.size || "inherit"};">${char}</span>`;
    }

    if (options.size) {
        anounceText += `</ųũŚť>`;
    }

    if (options.bold) {
        anounceText += "</Ţ>";
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
